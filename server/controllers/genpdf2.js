import path from "path";
import puppeteer from "puppeteer";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pdfgen = async (req, res) => {
  const userInput = req.body.content;
  console.log(userInput);
  const templatePath = path.join(__dirname, "/../template.html");

  try {
    const browser = await puppeteer.launch({ headless: true }); // Set headless to true for production
    const page = await browser.newPage();

    // Read the template content
    let content = await fs.readFile(templatePath, "utf-8");

    // Replace the placeholder in the template with user input
    const placeholderRegex = `${userInput}`;
    content = content.replace('{content}', userInput);

    // Set the page content
    await page.setContent(content);

    // Generate PDF
    const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });

    // Close the browser
    await browser.close();

    // Send the PDF as a response
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=output.pdf");
    res.send(pdfBuffer);
  } catch (err) {
    console.error("PDF generation error:", err);
    res.status(500).send("Internal Server Error");
  }
};

export default pdfgen;
