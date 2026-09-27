// Please don't change the pre-written code
// Import the necessary modules here

import { createNewOrderRepo } from "../model/order.repository.js";
import { ErrorHandler } from "../../utils/errorHandler.js";

export const createNewOrder = async (req, res, next) => {
  try {
    const orderData = req.body;

    // ✅ Basic validation (schema already enforces this, but clearer error messages help)
    if (
      !orderData.shippingInfo ||
      !orderData.orderedItems ||
      !orderData.paymentInfo ||
      !orderData.itemsPrice ||
      !orderData.totalPrice
    ) {
      return next(new ErrorHandler("Missing required order details", 400));
    }

    // Add current user & timestamp (if auth middleware sets req.user)
    if (req.user?._id) {
      orderData.user = req.user._id;
    }
    orderData.paidAt = Date.now();

    // Save order using repository
    const newOrder = await createNewOrderRepo(orderData);

    return res.status(201).json({
      success: true,
      message: "Order placed successfully",
      data: newOrder,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message || "Failed to place order", 500));
  }
};
