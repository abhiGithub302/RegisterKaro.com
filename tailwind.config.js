export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        secondary: '#ff8c00',
        navy: '#1C4670', // Define custom navy color
        orange: '#FFA229',
      }
    },
  },
  plugins: [],
}