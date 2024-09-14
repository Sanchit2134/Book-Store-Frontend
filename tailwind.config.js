module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust paths according to your project structure
  ],
  // darker: "class",
  darkMode: 'selector',

  // theme: {
  //   extend: {},
  // },
  plugins: [
    require('daisyui'), // Add DaisyUI plugin here
  ],
}
