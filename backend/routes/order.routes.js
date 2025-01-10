import express from "express";
import {
  addOrder,
  getOrders,
  getSingleOrder,
  updateOrder,
} from "../controllers/order.controller.js";
export const orderRouter = express.Router();
orderRouter.get("/getOrders", getOrders);
orderRouter.get("/getOrder/:id", getSingleOrder);
orderRouter.put("/updateOrder/:id", updateOrder);
orderRouter.post("/addOrder", addOrder);
