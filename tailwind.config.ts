import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config

// const lightColors = {
//   primary: '#3498db',
//   secondary: '#2ecc71',
//   accent: '#f1c40f',
//   text: '#333333',
//   background: '#f8f9fa',
//   interactive: '#297fb8',
//   warning: '#e74c3c',
//   success: '#27ae60',
//   sectionBackground: '#ecf0f1',
// };

// module.exports = {
//   colors: lightColors,

// };

// const darkColors = {
//   primary: '#3498db',
//   secondary: '#2ecc71',
//   accent: '#f1c40f',
//   text: '#f8f9fa',            // Texte en blanc dans le mode sombre
//   background: '#333333',      // Fond sombre
//   interactive: '#297fb8',
//   warning: '#e74c3c',
//   success: '#27ae60',
//   sectionBackground: '#2c3e50',  // Fond sombre pour les sections spéciales
// };

// module.exports = {
//   colors: darkColors,

// };
