import express from "express";
import multer from "multer";
import {
  createProduct,
  getProducts,
} from "../controllers/productController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();
const upload = multer();

router.get("/", getProducts);
router.post("/", protect, adminOnly, upload.single("image"), createProduct);

export default router;
