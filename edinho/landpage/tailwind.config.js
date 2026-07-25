/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Marca — paleta da campanha (bandeira): azul-marinho, amarelo, verde.
        navy: {
          DEFAULT: '#173A8F',
          950: '#0C1E4C',
          900: '#102A66',
          800: '#16368A',
          700: '#20489F',
          600: '#2B57B4',
          300: '#7C97D6',
          100: '#E7EDF9',
        },
        yellow: {
          DEFAULT: '#FDB913',
          300: '#FFD35A',
          400: '#FFC53C',
          500: '#FDB913',
          600: '#E6A200',
          700: '#C68700',
        },
        green: {
          DEFAULT: '#2E9E3F',
          400: '#4CB85E',
          500: '#2E9E3F',
          600: '#237E31',
        },
        // "ink" = azul-marinho profundo (texto sobre claro + seções escuras).
        ink: {
          DEFAULT: '#0E1F45',
          800: '#16368A',
          700: '#20489F',
          600: '#2B57B4',
        },
        sky: '#EEF3FB',
        cream: '#F6F8FC',
        danger: '#D93A3A',
        // Aliases de compatibilidade (mapeados para a nova paleta da campanha).
        gold: {
          DEFAULT: '#FDB913',
          300: '#FFD35A',
          400: '#FFC53C',
          500: '#FDB913',
          600: '#E6A200',
          700: '#C68700',
        },
        ember: '#2E9E3F',
      },
      fontFamily: {
        display: ['Anton', 'Archivo', 'system-ui', 'sans-serif'],
        sans: ['Archivo', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(100deg, #FFD35A 0%, #FDB913 50%, #F0A200 100%)',
        'blue-gradient': 'linear-gradient(160deg, #20489F 0%, #102A66 100%)',
        'ink-radial': 'radial-gradient(120% 120% at 50% 0%, #21489F 0%, #12306F 55%, #0E2352 100%)',
      },
      boxShadow: {
        gold: '0 18px 45px -12px rgba(253, 185, 19, 0.5)',
        blue: '0 22px 55px -20px rgba(21, 58, 143, 0.45)',
        card: '0 24px 60px -24px rgba(16, 34, 74, 0.22)',
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
