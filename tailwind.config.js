const flowbite = require("flowbite-react/tailwind");
const twElements = require("tw-elements-react/dist/plugin.cjs");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
    flowbite.content()
  ],
  theme: {
    colors: {
      color1: '#1A4D2E', // Dark Green
      color2: '#4F6F52', // Medium Green
      color3: '#E8DFCA', // Light Beige
      color4: '#F5EFE6', // Very Light Beige  
    },
  },
  plugins: [
    flowbite.plugin(),
    require("tw-elements-react/dist/plugin.cjs"),
    require('daisyui'),
  ]
}

