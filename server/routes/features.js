import express from "express";

const router = express.Router();

router.get('/mailer',(req,res)=>{
    res.send('Mailer Route');
});

router.get('/pdfgenerate',(req,res)=>{
    res.send('PDF Generate Route');
});

export default router;