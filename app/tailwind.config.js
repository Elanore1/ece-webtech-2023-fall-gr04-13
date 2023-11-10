/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        blueEce: '#007179',
        whiteSpecial: '#f4fefe',
        transparent: 'transparent',
        darkblue: '#0e254a',
        lilaPurple: '#8A2BE2',
        white: '#FFFFFF',
        black: '#000000',
        yellow:'#FFFF00',
        khaki:'#596643',
        beige:'#d1af76',
        grey:'#5d5d5d',
      },
      textColor:{
        black: '#000000',
        white: '#FFFFFF',
        whiteSpecial: '#f4fefe',
        darkblue: '#0e254a',
        blueEce: '#007179',
        lilaPurple: '#BF40BF',
      },
      border:{
        white: '#FFFFFF',
        darkblue: '#0e254a',
      },
      fontFamily:{
        sans:['Graphik','sans-serif'],
        serif:['Merriweather','serif'],
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      borderColor: {
        blueEce: '#007179',
        darkblue: '#0e254a',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    }
  },
  plugins: [
    require('tailwindcss-font-inter'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
