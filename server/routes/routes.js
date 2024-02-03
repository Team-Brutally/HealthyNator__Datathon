import express from "express";
import GeminiApi from "../controllers/gemini.js";
import { GeminiWithHistory } from "../controllers/gemini.js";

const router = express.Router();

// Home route
router.get("/", (req, res) => {
  res.send("Hello World!");
});

// Gemini AI routes
router.post("/ai", GeminiApi);
router.post("/history", GeminiWithHistory);

export default router;
