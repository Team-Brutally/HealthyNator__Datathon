import express from "express";
import generatePDF from "../controllers/genpdf2.js";
import sendmail from "../controllers/mailer.js";

const router = express.Router();

router.post('/mailer',sendmail);

router.post('/pdfgenerate',generatePDF);

export default router;