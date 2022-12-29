import express from "express";
import { commentPost } from "../controllers/commentController.js";

const router = express.Router();

router.post("/", commentPost);
router.get("/");
router.delete("/");

export default router;