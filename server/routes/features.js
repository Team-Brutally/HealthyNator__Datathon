import express from "express";
import generatePDF from "../controllers/genpdf2.js";
import sendmail from "../controllers/mailer.js";
import generatePDF2 from './../controllers/pdfgen.js';

const router = express.Router();

router.post('/mailer',sendmail);

router.post('/pdfgenerate',generatePDF);
router.post('/pdfgen2',generatePDF2)

export default router;