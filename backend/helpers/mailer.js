import nodemailer from "nodemailer";
import { Otp } from "../models/otp.model.js";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD,
  },
});
export const sendOtp = async (user) => {
  try {
    const otp = Math.floor(1000 + Math.random() * 8000) + "";
    const mailOptions = {
      from: process.env.GMAIL_ADDRESS,
      to: user.email,
      subject: "custkart email verification",
      text: `your otp is ${otp}`,
    };
    const previousOtps = await Otp.findOneAndDelete({ userId: user._id });
    const salt = await bcryptjs.genSalt(10);
    const hashedOtp = await bcryptjs.hash(otp, salt);
    const currentOtp = await Otp.create({
      userId: user._id,
      otp: hashedOtp,
    });
    transporter.sendMail(mailOptions, (err, info) => {});
    return true;
  } catch (err) {
    return false;
  }
};
