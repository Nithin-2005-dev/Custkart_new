import express from "express";
import { addProduct } from "../controllers/product.controller.js";
export const productRouter = express.Router();
productRouter.post("/addProduct", addProduct);
