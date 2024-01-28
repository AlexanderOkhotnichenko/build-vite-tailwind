/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      xl: { max: '1499.99px' },
      lg: { max: '1199.99px' },
      md: { max: '991.99px' },
      sm: { max: '767.99px' },
      xs: { max: '469.99px' },
      ls: { max: '369.99px' },
    },
    container: {
      center: true,
      padding: '15px'
    },
    extend: {
      colors: {
        body: '#00040F'
      },
      fontFamily: {
        'ArialRoundedMTBold': 'Arial Rounded MT Bold',
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          },
        },
      },
      animation: {
        fakeIn: 'fade-in .3s ease',
      }
    },
  },
  plugins: [],
}

