import cloudinary from "../config/cloudinary.config.js";
export const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.v2.uploader.upload(filePath);
    return {
      url: result.secure_url,
      publicId: result.public_id,
    };
  } catch (err) {
    throw new Error(err.message);
  }
};
