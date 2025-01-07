// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Adjust paths to match your project
  theme: {
    extend: {
      colors: {
        dark: '#1b1b1b',
        primary: '#88c0d0', // Neon blue
        secondary: '#d8dee9', // Light gray
        accent: '#88c0d0',
      },
      boxShadow: {
        xl: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
