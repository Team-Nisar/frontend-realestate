/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('./public/assets/Banner.jpg')",
        'loginBg':"url('./public/assets/loginBg.jpg')", 
        'registerBg':"url('./public/assets/registerBg.jpg')", 
      },
      colors: {
        'gold-500': '#ffd700',
        'gold-600': '#ffc107', 
      },
    },
  },
  plugins: [
    function({addUtilities}){
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar":{
          display:"none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style":"none",
          "scrollbar-width":"none",
        },
      };

      addUtilities(newUtilities);
    }
  ],
}