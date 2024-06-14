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
      color1: '#1A4D2E', 
      color2: '#4F6F52',
      color3: '#E8DFCA',
      color4: '#F5EFE6',      
      // #B8E0D2 - Un verde pastel claro suave y refrescante.
      // #A2D9CE - Un tono verde pastel con una ligera intensidad.
      // #8FC1A9 - Un verde pastel calmado con un toque de gris.
      // #7FB3B1 - Un verde pastel con un matiz azulado.
      // #6AB2B8 - Un verde pastel más vibrante con un matiz azulado.
      // #9AC0BB - Un verde pastel con un toque más frío y refrescante.

// #7EBD7A - Verde pastel con un toque de gris, suave y calmado.
// #6DBD8E - Verde pastel más vibrante con tonalidad azulada.
// #6BBDA4 - Verde pastel con un matiz más fresco y vivo.
// #6CBDBD - Verde pastel azulado con un tono más intenso.
// #6DACC6 - Verde pastel con un matiz más claro y refrescante.
// #6D95C6 - Verde pastel con un matiz azul profundo y sereno
    },
  },
  plugins: [
    flowbite.plugin(),
    require("tw-elements-react/dist/plugin.cjs")
  ]
}

