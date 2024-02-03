import express from "express";
import GeminiApi from "../controllers/gemini.js";
import { GeminiWithHistory } from "../controllers/gemini.js";
import sendmail from "../controllers/mailer.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/mailer", (req, res) => {
  sendmail(
    "minavpkaria@gmail.com",
    "Test Mail from Healthy App",
    "I am Parth, and I am a good coder."
  );
  res.send("Hello World!");
});

router.post("/ai", GeminiApi);
router.get("/history", GeminiWithHistory);

export default router;
