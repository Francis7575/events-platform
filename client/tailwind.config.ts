import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: 'rgba(255, 255, 255)',
        blue: 'hsl(232, 61%, 27%)',
        darkBlue: 'hsl(230, 62%, 20%)',
        secondDarkBlue: 'hsl(230, 62%, 19%)',
        darkGray: 'rgb(51, 51, 51)',
        gray: 'hsl(180, 1%, 28%)',
        lightGray: 'hsl(0, 0%, 91%)'
      },
      backgroundImage: {
        'cornerstone': "url('/cornerstone.png')",
        'auth': "url('/auth-bg.png')",
      }
    },
  },
  plugins: [],
};
export default config;
