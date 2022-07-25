/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        floatingUp: {
          "100%": { transform: "translateY(-0.75rem)" },
        },
        floatingUp2: {
          "100%": { transform: "translateY(-0.3rem)" },
        },
        floatingDown: {
          "100%": { transform: "translateY(0.9rem)" },
        },
        fade: {
          "50%": { opacity: "1" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fade: "fade 2.5s linear infinite alternate",
      },
    },
  },
  plugins: [],
}
