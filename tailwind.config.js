import withMT from "@material-tailwind/html/utils/withMT";
const flowbite = require("flowbite-react/tailwind");
 
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
});

