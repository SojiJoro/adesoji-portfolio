// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="footer bg-gray-100 py-6">
      <div className="container mx-auto space-y-4 text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Adesoji Adejoro. All rights reserved.
        </p>
        <a
          href="https://calendly.com/adesojiadejoro"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline inline-block"
        >
          Book a Meeting
        </a>
      </div>
    </footer>
  )
}
