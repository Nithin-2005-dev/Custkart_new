import express from "express";
import { addProduct, deleteProduct, getProducts } from "../controllers/product.controller.js";
import multerMiddleware  from "../middlewares/imageUpload.middleware.js"
export const productRouter = express.Router();
productRouter.post("/addProduct",multerMiddleware.single("image"), addProduct);
productRouter.delete("/deleteProduct/:id",deleteProduct);
productRouter.get("/getProducts/:id",getProducts);