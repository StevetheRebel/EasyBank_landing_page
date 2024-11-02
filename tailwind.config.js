/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': "hsl(233, 26%, 24%)",
        'lime-green': "hsl(136, 65%, 51%)",
        'bright-cyan': "hsl(192, 70%, 51%)",
        'neutral-grayish-blue': "hsl(233, 8%, 62%)",
        'neutral-light-grayish-blue': "hsl(220, 16%, 96%)",
        'neutral-very-light-gray': "hsl(0, 0%, 98%)",
        'neutral-white': "hsl(0, 0%, 100%)"
      },
      fontFamily: {
        sans: ['"Public Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
