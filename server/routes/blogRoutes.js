import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
} from "../controllers/blogContoller.js";
import { protect } from "../middlewares/protect.js";

const router = express.Router();

router.get("/", getAllBlogs);

router.get("/:id", getBlogById);

router.post("/", protect, createBlog);

router.put("/:id", protect, updateBlog);

router.delete("/:id", protect, deleteBlog);

export default router;
