/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Marca — dourado/laranja do Edinho
        gold: {
          DEFAULT: '#F5A800',
          400: '#FFC13B',
          500: '#F5A800',
          600: '#E08A00',
          700: '#C26F00',
        },
        ember: '#E8721C',
        ink: {
          DEFAULT: '#0B0B0C',
          800: '#141416',
          700: '#1E1E22',
          600: '#2A2A30',
        },
        cream: '#FBF8F1',
      },
      fontFamily: {
        display: ['Anton', 'Archivo', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(100deg, #FFC13B 0%, #F5A800 45%, #E8721C 100%)',
        'ink-radial': 'radial-gradient(120% 120% at 50% 0%, #1E1E22 0%, #0B0B0C 70%)',
      },
      boxShadow: {
        gold: '0 18px 45px -12px rgba(245, 168, 0, 0.55)',
        card: '0 24px 60px -24px rgba(0, 0, 0, 0.35)',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { transform: 'scale(1) rotate(-1deg)', opacity: '1' },
          '50%': { transform: 'scale(1.08) rotate(1.5deg)', opacity: '0.85' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        flicker: 'flicker 2.4s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};
