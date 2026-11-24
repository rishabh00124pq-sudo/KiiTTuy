import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#0B0B14', 900: '#12121F', 800: '#1B1B2E', 700: '#2A2A42' },
        sv: {
          50: '#F1EFFF', 100: '#E2DEFF', 300: '#A89CFF', 400: '#8A7AFF',
          500: '#6C5CFF', 600: '#5644E6', 700: '#4433BF',
        },
        mint: { 400: '#3DDBB0', 500: '#1FC297' },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(108,92,255,.25), 0 8px 40px -8px rgba(108,92,255,.45)',
      },
    },
  },
  plugins: [],
} satisfies Config;
