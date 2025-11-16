/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ink-black': '#0D0D0D',
        'dark-sepia': '#2B1F1A',
        'deep-bordeaux': '#4A1C1C',
        'antique-gold': '#B8966E',
        'paper-cream': '#F4EFE6',
        'bottle-green': '#1F3A2C',
        'seal-red': '#8B2F2F',
        'smoke-gray': '#4A4A4A',
        'ivory': '#FFFEF7',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'heading': ['Cormorant Garamond', 'serif'],
        'body': ['Lora', 'serif'],
        'accent': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

