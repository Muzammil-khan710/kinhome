/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['poppins, sans-serif' ],
      messi: ['Messinasans book, sans-serif']
    },
    colors: {
      backlight: '#ece7e4',
      backdark: '#403e3b',
      white: '#fff',
      black: '#000',
      chat: '#ede9e6',
      primary: {
        DEFAULT:'#403e3b',
        dark: '#1b1a1a',
      },
      gray: {
        DEFAULT: '#645c55',
        light: '#f7f7f7',
        dark: '#cec4bc',
      }
    },
    fontSize: {
      xs: ['0.8125rem', '1rem'],
      sm: ['0.9375rem', '1.25rem'],
      base: ['1.0825rem', '1.625rem'],
      lg: ['1.1875rem', '1.75rem'],
      xl: ['1.375rem', '2rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.75rem', '2.25rem'],
      '4xl': ['1.875rem', '2.25rem'],
      '5xl': ['2.1875rem', '2.5rem'],
      '6xl': ['2.7rem', '2.5rem'],
      '7xl': ['4rem', 1],
    },
    extend: {
      boxShadow: {
        navshadow: '11px 11px 25px 0 rgb(9 7 37 / 6%)',
        floatbtn: 'rgb(36 36 36 / 15%) 0px 20px 30px 0px'
      }
    },
  },
  plugins: [],
}
