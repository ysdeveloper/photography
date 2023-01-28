/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      'sans': [`var(--font-inter)`],
      'serif': [`var(--font-poppins)`]
    },
    extend: {},
  },
  plugins: [],
}
