//@type {import('tailwindcss').Config} 

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
      },
      textColor:{
        black: '#000000',
        white: '#FFFFFF',
        whiteSpecial: '#f4fefe',
        darkblue: '#0e254a',
      },
      border:{
        white: '#FFFFFF',
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
      }
    }
  },
  plugins: [
    require('tailwindcss-font-inter'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
