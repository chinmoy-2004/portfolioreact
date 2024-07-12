/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUpDown: {
          '0%, 100%': { transform: 'translateY(0)', backgroundColor: 'transparent' },
          '50%': { transform: 'translateY(20px)', backgroundColor: 'yellow', borderRadius: '50%' },
        },
        blink1: {
          '0%, 100%': {
            color: '#ff5733', 
          },
          '50%': {
            color: '#a3e635',
          },
        },
        blink2: {
          '0%, 100%': {
            color: '#a3e635', 
          },
          '50%': {
            color: '#00FFFF', // Cyan color
          },
        },
        scaleUp: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        textAppear: {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        popUp: {
          '0%': {
            transform: 'scale(1)',
            opacity: 0,
          },
          '100%': {
            transform: 'scale(1.5)',
            opacity: 1,
          },
        },
        colorChange: {
          '0%, 100%': { color: '#ff0000' },
          '25%': { color: '#00ff00' },
          '50%': { color: '#0000ff' },
          '75%': { color: '#ff00ff' },
        },
      },
      animation: {
        slideUpDown: 'slideUpDown 2s infinite',
        blink1: 'blink1 1.5s infinite',
        blink2: 'blink2 1.5s infinite',
        scaleUp: 'scaleUp 1s ease-in-out infinite',
        textAppear: 'textAppear 1s ease-out',
        fadeIn: 'fadeIn 1s ease-out',
        popUp: 'popUp 0.5s ease-out',
        colorChange: 'colorChange 1.5s infinite',
      },
      backgroundImage: {
        'custom-bg': "url('/assets/bg1 (1).jpg')",
      },
    },
  },
  plugins: [],
}