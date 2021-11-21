module.exports = {
  mode:'jit',
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
      animation: ['hover', 'group-hover', 'focus', 'group-focus'] ,
      fontSize: ['group-focus','group-hover'],
      translate: ['group-focus','group-hover'],
      textColor : ['group-focus'],
      transform : ['group-focus']
      
      
      
     

      
    },
  },
  plugins: [],
}
