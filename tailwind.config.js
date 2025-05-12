/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a0b1a',
          800: '#141539',
          700: '#1e1f5a',
        },
        coral: {
          50: '#fff2f0',
          100: '#ffe6e2',
          200: '#ffd0c7',
          300: '#ffb3a4',
          400: '#ff8c76',
          500: '#ff7a5c',
          600: '#ff5c3d',
          700: '#ff3a1a',
          800: '#ff1a00',
          900: '#cc1500',
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 122, 92, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};