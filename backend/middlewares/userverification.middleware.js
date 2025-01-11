import { User } from "../models/user.model.js";

export const isEmailVerified = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(401).json({
        success: true,
        message: "email is required",
      });
    }
    const user = await User.findOne({ email });
    if (!user.isVerified) {
      return res.status(403).json({
        success: false,
        message: "email not verified to login",
      });
    }
    next();
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
