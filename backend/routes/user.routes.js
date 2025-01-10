import express from "express";
import {
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/user.controller.js";
export const userRouter = express.Router();
userRouter.get("/getUser/:id", getUser);
userRouter.put("/updateUser", updateUser);
userRouter.delete("/deleteUser", deleteUser);