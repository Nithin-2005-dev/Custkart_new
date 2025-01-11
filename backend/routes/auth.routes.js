import express from "express";
import {
  changePassword,
  loginUser,
  registerUser,
  sendVerificationMail,
  verifyMail,
} from "../controllers/auth.controller.js";
import { isEmailVerified } from "../middlewares/userverification.middleware.js";
export const authRouter = express.Router();
authRouter.post("/register", registerUser);
authRouter.post("/login",isEmailVerified, loginUser);
authRouter.put("/changePassword/:id", changePassword);
authRouter.post("/sendMail", sendVerificationMail);
authRouter.post("/verifyMail/:id", verifyMail);
