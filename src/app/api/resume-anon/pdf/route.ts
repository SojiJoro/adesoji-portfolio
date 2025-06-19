// src/app/api/resume/pdf/route.ts
import { NextRequest } from 'next/server'
import puppeteer from 'puppeteer-core'

export async function GET(req: NextRequest) {
  const url = `${req.nextUrl.origin}/resume`

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH
  })

  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle0' })
  const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true })
  await browser.close()

  return new Response(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Adesoji_Adejoro_Resume.pdf"',
    },
  })
}
