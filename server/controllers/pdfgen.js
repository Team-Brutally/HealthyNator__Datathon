import express from 'express';
import PDFKit from 'pdfkit';
import cors from 'cors';

/**
 * Unused function to generate a PDF
 * Might be discarded in the future
 */

const generatePDF2 = (req, res) => {
  // Create a PDF document
  const input = req.body.content;
  console.log('PDF generation request received');
  const doc = new PDFKit();

  // Add content to the PDF
  doc.font('Helvetica-Bold').fontSize(18).fillColor('blue').text(`${input}`, { align: 'center' });

  // Finalize the PDF
  const buffers = [];

  // Handle errors during PDF generation
  doc.on('error', err => {
    console.error('PDF generation error:', err);
    res.status(500).send('Internal Server Error');
  });

  doc.on('data', buffer => buffers.push(buffer));
  doc.on('end', () => {
    try {
      // Send the PDF as a response
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=output.pdf');
      res.send(Buffer.concat(buffers));
    } catch (err) {
      console.error('Error sending PDF response:', err);
      res.status(500).send('Internal Server Error');
    }
  });

  doc.end();
};

export default generatePDF2;
