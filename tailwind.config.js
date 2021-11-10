module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'main-image': "url(/NEU.jpg)"
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'group-hover'] 
    },
  },
  plugins: [],
}
