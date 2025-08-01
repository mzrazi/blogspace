import express from "express";
import { getCurrentUser } from "../controllers/userContoller.js";
import { protect } from "../middlewares/protect.js";

const router = express.Router();

router.get("/me", protect, getCurrentUser);

export default router;
