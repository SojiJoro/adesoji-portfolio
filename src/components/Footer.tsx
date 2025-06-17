// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container space-y-4">
        <p className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} Adesoji Adejoro. All rights reserved.
        </p>
        <div className="text-center">
          <a
            href="https://calendly.com/your-calendly-link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Free AWS Cost Audit
          </a>
        </div>
      </div>
    </footer>
  )
}
