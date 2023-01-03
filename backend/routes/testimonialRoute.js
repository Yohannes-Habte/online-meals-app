import express from "express";
import { testimonialPost } from "../controllers/testimonialController.js";

const router = express.Router();

router.post("/", testimonialPost);

export default router;