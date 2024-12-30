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
        lobster: ['Lobster', 'cursive'],
        lobster: ['Lobster', 'cursive'],
        merriweather: ['Merriweather', 'serif'],
        fira: ['Fira Code', 'monospace'],
        raleway: ['Raleway', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        lora: ['Lora', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        work: ['Work Sans', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
        questrial: ['Questrial', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        crimson: ['Crimson Pro', 'serif'],
        alex: ['Alex Brush', 'cursive'],
        satisfy: ['Satisfy', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
        shadows: ['Shadows Into Light', 'cursive'],
        greatVibes: ['Great Vibes', 'cursive'],
      },
    },
  },
};
