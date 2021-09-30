const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
  // purge: [
  //   './public/**/*.{astro,js,ts,jsx,tsx,mdx}',
  //   './components/**/*.{astro,js,ts,jsx,tsx,mdx}'
  // ],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Fraunces', ...defaultTheme.fontFamily.serif]
      },
      colors: {
        purple: {
          1000: '#210d3a'
        }
      }
    },
    variants: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
};
