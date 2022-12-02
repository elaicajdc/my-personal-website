/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        primary: "0 2px 2px rgba(255,255,255,0.16)"
      },
      colors: {
        "custom-white" : {
          100: "#E5E5E5"
        },
        "custom-black" : {
          100: "#252525"
        },
        "custom-gray" : {
          100: "#EFEFEF"
        },
        "custom-red" : {
          100: "#EA3D46"
        }
      },
      fontFamily: {
          body: ["Roboto", "sans-serif"]
      },
    },
  },
  plugins: [],
}
