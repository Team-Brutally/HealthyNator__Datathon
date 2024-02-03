import express from "express";
import generatePDF from "../controllers/pdfgen.js";

const router = express.Router();

router.get('/mailer',(req,res)=>{
    res.send('Mailer Route');
});

router.get('/pdfgenerate',generatePDF);

export default router;