// src/app/api/resume-anon/pdf/route.ts
import { NextRequest } from 'next/server'
import puppeteer from 'puppeteer-core'

export async function GET(req: NextRequest) {
  const url = `${req.nextUrl.origin}/resume-anon` // this route must exist

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH // optional
  })

  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle0' })
  const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true })
  await browser.close()

  return new Response(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Resume_Anonymised.pdf"',
    },
  })
}
