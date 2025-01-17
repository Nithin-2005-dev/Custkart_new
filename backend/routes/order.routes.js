import express from "express";
import {
  placeOrder,
  getOrders,
  updateOrderStatus,
  cancelOrder,
  orderConformation,
  orderCancellationRequest,
} from "../controllers/order.controller.js";
import { isAdminEmail } from "../middlewares/isAdmin.js";
export const orderRouter = express.Router();
orderRouter.get("/getOrders/:userId", isAdminEmail, getOrders);
orderRouter.put("/updateOrderStatus/:id", isAdminEmail, updateOrderStatus);
orderRouter.post("/placeOrder", placeOrder);
orderRouter.post("/cancelOrder/:id", cancelOrder);
orderRouter.get("/orderConformation/:id", orderConformation);
orderRouter.get("/orderCancellation/:id", orderCancellationRequest);
