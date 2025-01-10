import express from "express";
import {
  changePassword,
  loginUser,
  registerUser,
} from "../controllers/auth.controller.js";
export const authRouter = express.Router();
authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.put("/changePassword/:id", changePassword);
