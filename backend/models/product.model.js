import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    productType: {
      type: String,
      enum: ["POLO", "OVERSIZED"],
      required: [true, "Product type required"],
    },
    materialType:{
      type: String,
      enum: ["type1", "type2"],
      required: [true, "Product type required"],
    },
    imageId:{
      type: String,
      required: [true, "image id required"],
    },
    designedBy:{
      type:mongoose.Types.ObjectId,
      ref:"User"
    },
    url:{
      type: String,
      required: [true, "image url required"],
    }
  },
  { timestamps: true }
);
export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
