import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainPurple: {
          DEFAULT: '#DA107B',
          100: '#DA107B',
          200: '#AE0D62',
          300: '#830A4A',
          400: '#570631',
          500: '#16020C',
        },
        mainBlue: {
          DEFAULT: '#01ECF3',
          100: '#01ECF3',
          200: '#00BCC1',
          300: '#008C8F',
          400: '#005C5D',
          500: '#001412',
        },
        gradient: 'linear-gradient(150deg, var(--main-purple), var(--main-blue))',
        'gradient-reverse': 'linear-gradient(150deg, var(--main-blue), var(--main-purple))',
      },
    },
  },
  plugins: [],
};
export default config;
