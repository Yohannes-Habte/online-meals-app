import express from "express";
import { getUser, verifyUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/:id", getUser);
router.post("/verifyToken", verifyUser);
router.delete("/:id");

export default router;