export const createNewOrderRepo = async (data) => {
  try {
    // Create and save the new order
    const newOrder = new OrderModel(data);
    const savedOrder = await newOrder.save();
    
    // Populate user and product details for the response
    const populatedOrder = await OrderModel.findById(savedOrder._id)
      .populate('user', 'name email')
      .populate('orderedItems.product', 'name price stock category');
    
    return populatedOrder;
  } catch (error) {
    throw new Error(`Failed to create order: ${error.message}`);
  }
};