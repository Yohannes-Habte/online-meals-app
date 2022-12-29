import express from "express";
import { loginPost } from "../controllers/loginController.js";

const router = express.Router();

router.post("/", loginPost); 

export default router;