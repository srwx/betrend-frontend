/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        floatingUp: {
          "100%": { transform: "translateY(-0.6rem)" },
        },
        floatingUp2: {
          "100%": { transform: "translateY(-0.3rem)" },
        },
        floatingDown: {
          "100%": { transform: "translateY(0.5rem)" },
        },
      },
    },
  },
  plugins: [],
}
