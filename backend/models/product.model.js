import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
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
