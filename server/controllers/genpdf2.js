import path from 'path';
import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pdfgen =async (req, res) => {
    const templatePath = path.join(__dirname, 'template.html');
  
    try {
      const browser = await puppeteer.launch({ headless: 'new' });
      const page = await browser.newPage();
  
      const content = await fs.readFile(templatePath, 'utf-8');
      await page.setContent(content);
  
      const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });
  
      await browser.close();
  
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=output.pdf');
      res.send(pdfBuffer);
    } catch (err) {
      console.error('PDF generation error:', err);
      res.status(500).send('Internal Server Error');
    }
  };

  export default pdfgen;