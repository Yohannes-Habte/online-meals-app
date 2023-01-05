import express from "express";
import { orderPost } from "../controllers/orderController.js";

const router = express.Router();

router.post("/", orderPost);
router.get("/");
router.delete("/");

export default router;