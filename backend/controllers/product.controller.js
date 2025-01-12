import { Product } from "../models/product.model.js";

export const addProduct = async (req, res) => {
  try {
    const { productType, price } = req.body;
    if (!productType || !price) {
      return res.status(400).json({
        success: false,
        message: "missing fields",
      });
    }
    const product = await Product.create({
      productType,
      price,
    });
    return res.status(200).json({
      success: true,
      message: "product added",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
