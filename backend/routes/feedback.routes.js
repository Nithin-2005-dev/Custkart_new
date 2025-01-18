import express from "express";
import { sendFeedbackMessage } from "../controllers/feedback.controller.js";
export const feedbackRouter = express.Router();
feedbackRouter.post("/send",sendFeedbackMessage);