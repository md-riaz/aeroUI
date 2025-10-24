/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./demo.html",
    "./src/**/*.{css,html}",
    "./README.md"
  ],
  theme: {
    extend: {
      borderRadius: {
        'card': 'calc(var(--radius) + 0.5rem)'
      }
    }
  },
  plugins: []
};
