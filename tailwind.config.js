/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#581c87",
          
          "secondary": "#86198f",
                   
          "accent": "#9d174d",
                   
          "neutral": "#be123c",
                   
          "base-100": "#292524",
                   
          "info": "#16a34a",
                   
          "success": "#17b58b",
                   
          "warning": "#eebe2f",
                   
          "error": "#eb374f",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
