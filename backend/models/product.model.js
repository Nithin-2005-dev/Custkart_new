import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    productType: {
      type: String,
      enum: ["POLO", "OVERSIZED"],
      required: [true, "Product type required"],
    },
    price: {
      type: Number,
      required: [true, "product price required"],
    },
  },
  { timestamps: true }
);
export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
