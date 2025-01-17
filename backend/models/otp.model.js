import mongoose from "mongoose";
const otpSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "user id required"],
    unique: [true, "otp already generated"],
  },
  otp: {
    type: String,
    required: [true, "otp id required"],
  },
  createdAt: {
    type: String,
    default: Date.now(),
  },
  expiresAt: {
    type: String,
    default: Date.now()+ 600000,
  },
});
export const Otp=mongoose.models.Otp || mongoose.model("Otp",otpSchema)
