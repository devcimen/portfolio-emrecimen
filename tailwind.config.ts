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
        'gray-000': '#242526',
        'gray-100': '#3A3C3D',
        'gray-300': '#A8A9B2',
        'gray-400': '#D1D1D1',
        'gray-600': '#EBEBEB',
        'gray-800': '#F2F2F2',
        'gray-900': '#FAFAFA',
        'gray-FFF': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
export default config;
