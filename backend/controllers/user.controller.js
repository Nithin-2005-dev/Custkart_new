import { User } from "../models/user.model.js";

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "user found.",
      user: {
        email: user.email,
        name: user.name,
        orders: user.orders,
        phone: user.phone,
        address: user.address,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
export const updateUser = async (req, res) => {
  try {
    if (req.body.password) {
      return res.status(403).json({
        success: false,
        message: "password can't be change directly",
      });
    }
    if (req.body.publicKey) {
      return res.status(403).json({
        success: false,
        message: "public key can't be change directly",
      });
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (req.body.email) {
      const user = await User.findById(req.params.id);
      user.isVerified = false;
      await user.save();
    }
    if (!updateUser) {
      return res.status(404).json({
        success: false,
        message: "user not found or refused to update",
      });
    }
    return res.status(200).json({
      success: true,
      message: "user updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const deletedUser=await User.findByIdAndDelete(req.params.id);
    if(!deletedUser){
     return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "user deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
