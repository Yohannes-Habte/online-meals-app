import express from "express";
import { userPost } from "../controllers/userController.js";

const router = express.Router();

router.post("/", userPost);

export default router;