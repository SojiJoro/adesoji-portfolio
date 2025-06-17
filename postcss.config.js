/** @type {import('postcss').ProcessOptions} */
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},   // use the new bridge plugin
    autoprefixer: {},
  },
}
