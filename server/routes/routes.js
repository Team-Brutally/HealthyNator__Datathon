import express from "express";
import GeminiApi from "../controllers/gemini.js";
import { GeminiWithHistory } from "../controllers/gemini.js";
import { getPatients,getDoctors, createPatient, createDoctor  } from "../controllers/main.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/ai", GeminiApi);
router.get("/history", GeminiWithHistory);
router.get('/patients',getPatients);
router.get('/doctors',getDoctors);
router.post('/patients',createPatient);
router.post('/doctors',createDoctor);

export default router;
