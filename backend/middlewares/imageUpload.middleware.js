import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, path.join(__dirname, "../uploads")); 
  },
  filename: (req, file, cd) => {
    cd(null, file.fieldname + '-' + Date.now() + '-' + Math.round(Math.random() * 1e9));
  },
});

const fileFilter = (req, file, cd) => {
  if (file.mimetype.startsWith("image")) {
    cd(null, true);
  } else {
    cd(new Error("Not an image! Please upload only images"));
  }
};

export default multer({
  fileFilter,
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, 
  },
});
