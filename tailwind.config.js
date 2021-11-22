module.exports = {
  mode:'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        Gloria: ['Gloria Hallelujah', 'cursive']
      },
      backgroundImage:{
        'main-image': "url(/NEU.jpg)"
      },
    },
    minWidth: {

      '0': '0',

      '1/4': '25%',

      '1/2': '50%',

      '3/4': '75%',

      'full': '100%',
     },
     animation: {
        spin: 'spin 6s linear infinite'
      }
  },
  variants: {
    extend: {
      animation: ['hover', 'group-hover', 'focus', 'group-focus', 'motion-safe','motion-reduce'] ,
      fontSize: ['group-focus','group-hover'],
      translate: ['group-focus','group-hover'],
      textColor : ['group-focus'],
      transform : ['group-focus','hover']
      
      
      
     

      
    },
  },
  plugins: [],
}
