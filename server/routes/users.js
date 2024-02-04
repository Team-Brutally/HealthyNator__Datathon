import express from "express";

import {
  getPatients,
  getDoctors,
  createPatient,
  createDoctor,
  getCustomPatient,
} from "../controllers/main.js";


const router = express.Router();


router.get("/patients", getPatients);
router.get("/doctors", getDoctors);
router.post("/patients", createPatient);
router.post("/doctors", createDoctor);
router.post('/login', getCustomPatient);

export default router;
