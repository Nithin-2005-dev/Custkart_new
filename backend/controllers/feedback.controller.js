import { sendFeedbackMail } from "../helpers/mailer.js";
import { Feedback } from "../models/feedback.model.js";
import { User } from "../models/user.model.js";

export const sendFeedbackMessage = async (req, res) => {
  try {
    const { userId, message } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const feedback = await Feedback.create({
      userId,
      message,
    });

    if (!feedback) {
      return res.status(500).json({
        success: false,
        message: "Something went wrong while saving feedback",
      });
    }
    await sendFeedbackMail(user, message);
    res.status(200).json({
      success: true,
      message: "Feedback sent successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
