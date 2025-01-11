import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "user is required"],
    },
    products: [
      {
        productId: { type: mongoose.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    totalAmount: {
      type: Number,
      required: [true, "total amount is required"],
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
    paymentStatus: {
      type: String,
      enum: {
        values: ["PAID", "NOT PAID"],
        message: `{VALUE} is not a valid payment status`,
      },
      default: "NOT PAID",
    },
    transactionId: {
      type: String,
      required: function () {
        return this.paymentStatus === "PAID";
      }, 
    },
    orderStatus:{
      type:String,
      enum: {
        values: ["PLACED", "SHIPPED","OUT OF DELIVERY","DELIVERIED","CANCELLED"],
        message: `{VALUE} is not a valid order status`,
      },
      default: "PLACED",
    },
    userNote: {
      type: String,
      default: "No note by user",
    },
    isCancelled:{
      type:Boolean,
      default:false
    }
  },
  { timestamps: true }
);
export const Order =
  mongoose.models.Order || mongoose.model("Order", orderSchema);
