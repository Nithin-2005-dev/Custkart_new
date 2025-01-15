import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "user is required"],
    },
    products: [
      {
        productId: {
          type: mongoose.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
    totalAmount: {
      type: Number,
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
      required: [true, "payment status required"],
    },
    transactionId: {
      type: String,
      required: function () {
        return this.paymentStatus === "PAID";
      },
    },
    orderStatus: {
      type: String,
      enum: {
        values: [
          "PENDING",
          "PLACED",
          "SHIPPED",
          "OUT OF DELIVERY",
          "DELIVERIED",
          "CANCELLED",
          "CANCELLATION PENDING"
        ],
        message: `{VALUE} is not a valid order status`,
      },
      default: "PENDING",
    },
    userNote: {
      type: String,
      default: "No note by user",
    },
    isCancelled: {
      type: Boolean,
      default: false,
    },
    instituteName: {
      type: String,
      required:[true,"Institute name required"],
    },
    clubName: {
      type: String,
      required:[true,"club name required"],
    },
  },
  { timestamps: true }
);
export const Order =
  mongoose.models.Order || mongoose.model("Order", orderSchema);
