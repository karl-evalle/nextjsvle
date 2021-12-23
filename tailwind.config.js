module.exports = {
  mode:'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': {
              opacity: '0',
              
          },
          '100%': {
              opacity: '1',
              
          },
      }
      },

      fontFamily:{
        Gloria: ['Gloria Hallelujah', 'cursive']
      },
      backgroundImage:{
        'main-image': "url(/NEU2.jpg)"
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
        spin: 'spin 6s linear infinite',
        'fade-in': 'fade-in 1s ease-out',
        'fade-in2':'fade-in 3.5s ease-out',
        'fade-in3':'fade-in 4.5s ease-out'
      },




      
  },
  
  plugins: [],
}
