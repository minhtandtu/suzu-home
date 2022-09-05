/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"
  ]
,
  theme: {
    textFillColor: theme => theme('borderColor'),
    textStrokeColor: theme => theme('borderColor'),
    textStrokeWidth: theme => theme('borderWidth'),
    paintOrder: {
      'fsm': { paintOrder: 'fill stroke markers' },
      'fms': { paintOrder: 'fill markers stroke' },
      'sfm': { paintOrder: 'stroke fill markers' },
      'smf': { paintOrder: 'stroke markers fill' },
      'mfs': { paintOrder: 'markers fill stroke' },
      'msf': { paintOrder: 'markers stroke fill' },
    },
    
   
    extend: {
      fontFamily:{
        Alegreya: ['Alegreya SC','"Barlow condensed"', 'san-serif'],
        Inter: ['Inter']

      },
      colors:{
        primary:'#16405B'
      }, 
      borderRadius:{
        'eclipse': '1000px 1000px 0px 0px / 300px 300px;'
      },
      boxShadow: {
        'biginner': 'inset 0 8px 8px 0 rgb(0 0 0 / 0.05);',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('tailwindcss-text-fill-stroke'), // no options to configure
  ],
  
}
