import express from "express";
import { paymentPost } from "../controllers/paymentController.js";
const router = express.Router();

router.post("/", paymentPost);

export default router;