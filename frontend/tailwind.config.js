/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
      xl: '1440px',
    },
    colors: {
      'primary': '#6B3CC9',
      'secondary': '#F28D35',
      'analogous1': '#6A44F2',
      'analogous2': '#1CBDDD',
      'triadic1': '#52378C',
      'dark1': '#78BF91',
      'dark2': '#4DCA79',
      'textColor': '#2F2F2F',
      'textColorLight': '#545A75',
      'textColorSub': '#9C9991',
      'accent1': '#E2F2FE',
      'accent2': '#FFF8E0',
      'error': '#FF0335',
      'success': '#5EB30B',
    },
    extend: {},
  },
  plugins: [],
}