/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d6d6d6',
        secondary: '#b5b5b5',
        darkTheme: '#2d2d30',
        darkThemeText: 'rgb(105, 117, 134)',
        lightTheme: '#d2d3db',
        lightThemeText: 'rgb(105, 117, 134)',
        greenTheme: '#355E3B',
        purpleTheme: '#673AB7',
        darkRedTheme: '#8b0000',
        yellowTheme: '#FFD700',
        blueTheme: '#0000FF',
        lightBlueTheme: '#ADD8E6',
        darkBlueTheme: '#00008B',
        error: 'rgb(244, 67, 54)',
        inputBackgroundLighter: 'rgb(255, 255, 255)',
        inputBackgroundDarker: 'rgb(248, 250, 252)',
        loginBackgroundLighter: 'rgb(255, 255, 255)',
        loginBackgroundDarker: 'rgb(33, 41, 70)',
        lineColor: 'rgb(227, 232, 239)',
      },
      animation: {
        'spin-slow': 'spin 3s ease-in-out infinite',
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
