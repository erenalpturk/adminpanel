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
        greenTheme: '#009688',
        purpleTheme: '#673AB7',
        darkRedTheme: '#ec407a',
        yellowTheme: '#c77e23',
        blueTheme: '#3fb0ac',
        lightBlueTheme: '#2ca58d',
        darkBlueTheme: '#3f51b5',
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
