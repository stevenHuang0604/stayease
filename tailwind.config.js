/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";
import tailwind3dTransforms from "@xpd/tailwind-3dtransforms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Agbalumo: ["Agbalumo", "system-ui"],
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(250px, 1fr))",
        testimonial: "repeat(3,minmax(0,450px))",
        table: "1.4fr 1.4fr 2.4fr 1fr 1fr 1.6fr 8rem",
      },
      BorderRadius: {
        circle: "50%",
      },
    },
  },
  plugins: [tailwind3dTransforms],
};
