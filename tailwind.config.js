/** @type {import('tailwindcss').Config} */
var webpack = require('webpack');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        primary: "0 2px 2px rgba(255,255,255,0.16)"
      },
      backgroundImage: {
        'firstImage': "url('https://i.imgur.com/kVh9pOd.png')",
        'secondImage': "url('https://i.imgur.com/Tm25HvW.png')",
      },
      colors: {
        "custom-white" : {
          100: "#E5E5E5"
        },
        "custom-black" : {
          100: "#252525"
        },
        "custom-gray" : {
          100: "#EFEFEF",
          200: "#C4C4C4",
          300: "#E5E7E6",
          400: "#A1A1A1"
        },
        "custom-red" : {
          100: "#EA3D46",
          200: "#BA2D34"
        }
      },
      fontFamily: {
          body: ["Roboto", "sans-serif"]
      },
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    }),
  ],
}