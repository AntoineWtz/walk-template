/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Tinos', 'serif'],
      },
      spacing: {
        72: '72px', // Largeur de chaque colonne
        24: '24px', // Gap horizontal
      },
      gridTemplateColumns: {
        12: 'repeat(12, minmax(0, 1fr))', // 12 colonnes fluides
      },
    },
    container: {
      center: true,
      padding: '1rem', // Ajoute un padding uniforme
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
