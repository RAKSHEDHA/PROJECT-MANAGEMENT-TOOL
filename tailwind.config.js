/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all JSX/TSX files for Tailwind classes
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Custom primary color
        secondary: "#9333EA", // Custom secondary color
        accent: "#22C55E", // Accent color
      },
    },
  },
  plugins: [],
};
