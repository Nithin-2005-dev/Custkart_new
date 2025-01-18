import express from "express";
import {
  changePassword,
  ForgotPasswordMail,
  loginUser,
  registerUser,
  sendForgotPasswordMail,
  sendVerificationMail,
  verifyMail,
} from "../controllers/auth.controller.js";
import { isEmailVerified } from "../middlewares/userverification.middleware.js";
export const authRouter = express.Router();
authRouter.post("/register", registerUser);
authRouter.post("/login",isEmailVerified, loginUser);
authRouter.post("/sendMail", sendVerificationMail);
authRouter.post("/sendForgotPasswordMail", sendForgotPasswordMail);
authRouter.post("/verifyMail/:id", verifyMail);
authRouter.post("/forgotPasswordMail/:id", ForgotPasswordMail);
