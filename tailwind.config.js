/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      'coffee',
      'forest',
      'synthwave',
      'retro',
      'corporate',
      'luxury',
      'dark',
      'business',
    ],
  },
};
