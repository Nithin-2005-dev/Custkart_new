import cloudinary from "../config/cloudinary.config.js";
import { uploadToCloudinary } from "../helpers/cloudinary.helper.js";
import { Product } from "../models/product.model.js";
import { unlink } from "fs/promises";

export const addProduct = async (req, res) => {
  try {
    const { designedBy } = req.query;

    if (!designedBy) {
      return res.status(400).json({
        success: false,
        message:
          "user required!",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "File is required. Please upload an image.",
      });
    }

    let uploadResponse;
    try {
      uploadResponse = await uploadToCloudinary(req.file.path);
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: `Failed to upload image to Cloudinary: ${err.message}`,
      });
    }

    const { url, publicId } = uploadResponse;
    if (!url || !publicId) {
      return res.status(500).json({
        success: false,
        message: "Cloudinary response is missing required fields.",
      });
    }

    const product = await Product.create({
      url,
      imageId: publicId,
      designedBy,
    });

    await unlink(req.file.path);

    return res.status(200).json({
      success: true,
      message: "Product added successfully.",
      product,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    await cloudinary.v2.uploader.destroy(product.imageId);

    await Product.findByIdAndDelete(productId)

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
};
export const getProducts=async(req,res)=>{
  try{
    const userId=req.params.id;
    if(!userId){
      res.status(400).json({
      success: false,
      message: "user id required",
    });
    }
    const products=await Product.find({designedBy:userId});
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      products
    });
  }catch(err){
    res.status(500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
}