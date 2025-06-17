// Use the official Tailwind PostCSS plugin so new at-rules like `@theme`
// are processed correctly. Autoprefixer remains for vendor prefixes.
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
}
