/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-blue': 'var(--primary-blue)',
        'secondary-blue': 'var(--secondary-blue)',
        'accent-gold': 'var(--accent-gold)',
        'dark-text': 'var(--dark-text)',
        'light-bg': 'var(--light-bg)',
        'white': 'var(--white)',
      },
    },
  },
  plugins: [],
}