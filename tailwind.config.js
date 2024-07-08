/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./theme/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "Roboto-Black": "Roboto-Black",
      "Roboto-BlackItalic": "Roboto-BlackItalic",
      "Roboto-Bold": "Roboto-Bold",
      "Roboto-BoldItalic": "Roboto-BoldItalic",
      "Roboto-Italic": "Roboto-Italic",
      "Roboto-Light": "Roboto-Light",
      "Roboto-LightItalic": "Roboto-LightItalic",
      "Roboto-Medium": "Roboto-Medium",
      "Roboto-MediumItalic": "Roboto-MediumItalic",
      "Roboto-Regular": "Roboto-Regular",
      "Roboto-Thin": "Roboto-Thin",
      "Roboto-ThinItalic": "Roboto-ThinItalic",
      "Sacramento-Regular": "Sacramento-Regular",
    },
    extend: {
      colors: {
        "dark-gray": "#171717",
        "light-gray": "#ffffffbf",
        "golden": "#bb9d7b",
        "shellfish": "#ffffff0d",
        "gray": "#f5f5f5",
      },
      backgroundImage: {
        'gradient-gray': "linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(245,245,245,1) 50%);",
      }
    },
  },
  plugins: [],
};
