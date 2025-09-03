/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-sapphire': '#0F1B4C',   // very dark deep blue
        'storm-blue': '#1F3A93',      // medium stormy blue
        'frosted-sky': '#A3D5FF',     // soft light blue
      },
    },
  },
  plugins: [],
}
