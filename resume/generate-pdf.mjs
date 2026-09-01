import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, 'index.html');
const pdfPath  = path.join(__dirname, 'Tejas_Dadhich_Resume.pdf');

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();

// Load the local HTML file
await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0', timeout: 30_000 });

// Wait for Google Fonts (Inter) to fully render
await page.evaluateHandle('document.fonts.ready');
await new Promise(r => setTimeout(r, 1500));

// Generate PDF — preferCSSPageSize lets @page { size: A4; margin: … } take effect
await page.pdf({
  path: pdfPath,
  format: 'A4',
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});

await browser.close();
console.log(`✅  PDF saved to: ${pdfPath}`);
