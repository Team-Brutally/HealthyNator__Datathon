import express from "express";
import generatePDF from "../controllers/genpdf2.js";
import sendmail from "../controllers/mailer.js";

const router = express.Router();

router.get('/mailer',sendmail);

router.get('/pdfgenerate',generatePDF);

export default router;