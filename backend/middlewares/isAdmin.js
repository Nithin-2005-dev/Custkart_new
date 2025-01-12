import { User } from "../models/user.model.js";

export const isAdminEmail = async (req, res, next) => {
  try {
    let { userId } = req.params;
    if (!userId) {
      userId = req.body.userId;
    }
    if (!userId) {
      return req.status(400).json({
        success: false,
        message: "user id required to see the orders",
      });
    }
    const user = await User.findById(userId);
    if (user.email === process.env.GMAIL_ADDRESS) {
      req.isAdmin = true;
    } else {
      req.isAdmin = false;
    }
    next();
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
