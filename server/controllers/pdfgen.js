const express = require('express');
const PDFKit = require('pdfkit');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/generatePDF', (req, res) => {
  // Create a PDF document
  const doc = new PDFKit();

  // Add content to the PDF
  doc.fontSize(18).text('Hello, PDFKit!', 100, 100);

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
});

const port = 3000;
app.use(express.static('public')); // Serve static files from the 'public' directory
app.listen(port, () => {
  console.log(Server running at http://localhost:${port});
});
pdf generator ka ho gaya
bas abhi integrate ho jaye
jo ho jayega pakka
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PDF Generator</title>
</head>
<body>
  <button onclick="generatePDF()">Generate PDF</button>

  <script>
    function generatePDF() {
      // Send a request to the server to generate and download the PDF
      fetch('http://localhost:3000/generatePDF', { method: 'GET' })
        .then(response => response.blob())
        .then(blob => {
          // Create a link element to trigger the download
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'output.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch(error => console.error('Error generating PDF:', error));
    }
  </script>
</body>
</html>