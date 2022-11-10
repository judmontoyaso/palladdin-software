/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./index.tsx",
  ],

  theme: {
    extend: {
      visibility: ["hover", "focus"],
      backgroundImage: {
        background: "url('/assets/background.jpg')",
      },
    },
  },

  plugins: [],
};
