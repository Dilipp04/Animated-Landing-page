/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1959AC",
        primaryDark: "#0546D2",
        textBlack: "#222222",
      },
      letterSpacing: {
        tightest: "-0.02em",
      },
      fontFamily: {
        robotoCondensed: ["var(--font-roboto_condensed)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
