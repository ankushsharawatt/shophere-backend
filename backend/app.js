import express from "express";
import dotenv from "dotenv";
import path from "path";
import productRoutes from "./src/routes/product.routes.js";
import {
  errorHandlerMiddleware,
  handleUncaughtError,
} from "./middlewares/errorHandlerMiddleware.js";
import userRoutes from "./src/routes/user.routes.js";
import cookieParser from "cookie-parser";
import orderRoutes from "./src/routes/order.routes.js";

const configPath = path.resolve("backend", "config", "uat.env");
dotenv.config({ path: configPath });

const app = express();
app.use(express.json());
app.use(cookieParser());

// configure routes
app.use("/api/shophere/product", productRoutes);
app.use("/api/shophere/user", userRoutes);
app.use("/api/shophere/order", orderRoutes);

// errorHandlerMiddleware
app.use(errorHandlerMiddleware);

export default app;
