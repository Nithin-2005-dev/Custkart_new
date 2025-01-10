import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "user is required"],
    },
    products: {
      type: [mongoose.Types.ObjectId],
      ref: "Product",
      required: [true, "products is required"],
    },
    totalAmount: {
      type: Number,
      required: [true, "products is required"],
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
        default: "NOT PAID",
      },
    },
    transactionId: {
      type: String,
      required: [true, "transaction id is required"],
    },
    userNote: {
      type: String,
      default: "No note by user",
    },
  },
  { timestamps: true }
);
export const Order =
  mongoose.models.Order || mongoose.model("Order", userSchema);
