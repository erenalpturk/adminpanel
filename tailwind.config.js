/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        // Add additional breakpoints if necessary
      },
      colors: {
        primary: '#d6d6d6',
        secondary: '#b5b5b5',
        greenTheme: '#355E3B',
        pinkTheme: '#FFC0CB',
        darkRedTheme: '#8b0000',
        yellowTheme: '#FFD700',
        blueTheme: '#0000FF',
        lightBlueTheme: '#ADD8E6',
        darkBlueTheme: '#00008B',
        error: '#FF6347',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
