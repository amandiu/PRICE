/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        white: '0px .5px 1px 0px rgba(255, 255, 255, 0.5)', // কাস্টম হোয়াইট শ্যাডো
        // red: '0 1px 4px rgba(255, 0, 0, 0.3), 0 1px 10px rgba(255, 0, 0, 0.2)'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

