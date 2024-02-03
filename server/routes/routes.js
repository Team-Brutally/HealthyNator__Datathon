import express from "express";
import GeminiApi from "../controllers/gemini.js";
import GeminiWithHistory from "../controllers/gemini.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/ai", GeminiApi);
router.post("/history", GeminiWithHistory);

export default router;
