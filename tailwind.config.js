/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brandmain': '#123123',
        'brandlight': '#F2F2F2',
        'branddark': '#123123',

        'sitemain': '#2C3E50',
        'sitelight': '#123123',
        'sitedark': '#123123',

        'accentmain': '#9B1B30',
        'accentlight': '#C89F1F3',
        'accentdark': '##005F5B',
      },
    },
  },
  plugins: [],
}

