module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // All Vue components and JS files
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
};
