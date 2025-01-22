/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./public/assets/Banner2.jpg')",
        loginBg: "url('./public/assets/LoginBg.jpg')",
        registerBg: "url('./public/assets/registerBg.jpg')",
      },
      colors: {
        "rich-purple-50":"#E0DEF7",
        "rich-purple-100": "#7065F0",
        "rich-purple-200": "#5a4edf",
        "rich-purple-800": "#403b77",
        "sup-light-purple": "#EDECFA",
        "dark-blue": "#100A55",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
