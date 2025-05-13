/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color_hover1' : '#e15f2b',
        'color_background' : '#eceff4',
        'color_blue1' : '#004f99',
      },
      fontSize: {
        '3xl': '1.875rem',
        '2xl': '1.5rem',
        'xl': '1.25rem',
        'lg': '1.125rem',
        'base': '1rem',
        'sm': '0.875rem',
        'xs': '0.82rem',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
        'mono': ['Fira Code', 'monospace'],
        'display': ['Oswald', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
        'body2': ['Roboto', 'sans-serif'],
        'body3': ['Lato', 'sans-serif'],
        'body4': ['Montserrat', 'sans-serif'],
        'body5': ['Raleway', 'sans-serif'],
        'body6': ['Source Sans Pro', 'sans-serif'],
        'body7': ['Ubuntu', 'sans-serif'],
      },
    },
    plugins: [],
  }
}