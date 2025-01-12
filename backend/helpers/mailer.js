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
    const info = await transporter.sendMail(mailOptions);
    if (!info) {
      return { success: false, message: "failed to send email" };
    } else {
      return {
        success: true,
        messageL: "email sent successfully",
        otpId: currentOtp._id,
      };
    }
  } catch (err) {
    console.error("Error sending email:", err);
    return { success: false, error: err.message };
  }
};
export const orderConformationMail = async (order) => {
  try {
    console.log(order)
    const mailOptions = {
      from: process.env.GMAIL_ADDRESS,
      to: process.env.GMAIL_ADDRESS,
      subject: "custkart order Conformation email",
      text: `click on below buttons to update order status`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <a href="http://localhost:8080/api/order/orderConformation/${order._id}?status=accept"><button>Accept</button></a>
        <a href="http://localhost:8080/api/order/orderConformation/${order._id}?status=reject"><button>Reject</button></a>
    </div>
</body>
</html>`
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (err) {
    console.error("Error sending email:", err);
    return { success: false, error: err.message };
  }
};
export const orderStatusMail = async (message,email,subject) => {
  try {
    const mailOptions = {
      from: process.env.GMAIL_ADDRESS,
      to: email,
      subject,
      text: message,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (err) {
    console.error("Error sending email:", err);
    return { success: false, error: err.message };
  }
};
