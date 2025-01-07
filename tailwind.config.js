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
        72: '72px', // Largeur d'une colonne ou hauteur d'une ligne
        24: '24px', // Gap entre les colonnes et les lignes
      },
      gridTemplateColumns: {
        12: 'repeat(12, 72px)', // 12 colonnes fixes
      },
      gridTemplateRows: {
        12: 'repeat(12, 72px)', // 12 lignes fixes
      },
    },
    container: {
      center: true,
      padding: '24px', // Padding horizontal
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
