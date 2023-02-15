/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      'xl': {'max': '1600px'},
      'lg': {'max': '1199px'},
      'md': {'max': '991px'},
      'sm': {'max': '767px'},
      'xs': {'max': '575px'},
      'xxs': {'max': '480px'},
    },
    fontFamily: {
      'sans': [`var(--font-inter)`],
      'serif': [`var(--font-poppins)`],
      'dancing': [`var(--font-dancing)`]
    },
    extend: {},
  },
  plugins: [],
}
