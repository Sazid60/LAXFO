/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ['EB Garamond', 'serif'],
    },
  },
},
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

