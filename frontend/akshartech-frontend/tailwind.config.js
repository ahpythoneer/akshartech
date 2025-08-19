/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E40AF', // Deep blue
          light: '#3B82F6',
          dark: '#1E3A8A',
        },
        secondary: {
          DEFAULT: '#64748B', // Slate gray
          light: '#94A3B8',
          dark: '#475569',
        },
        accent: {
          DEFAULT: '#F59E0B', // Amber
          light: '#FBBF24',
          dark: '#D97706',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
