/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight-sky': '#0F1C2E',
        'high-altitude-blue': '#1F66FF',
        'elevated-cyan': '#35D3F9',
        'cloud-white': '#F5FAFF',
        'growth-green': '#2DBE7F',
        'mild-amber': '#FFB347',
        'clear-red': '#E24D4D',
        'slate-ink': '#223241',
        'horizon-mist': '#D9E4EE',
        'afterglow-violet': '#5D73FF',
      },
      backgroundImage: {
        'dawn-gradient': 'linear-gradient(to top, #0F1C2E, #1F66FF, #35D3F9)',
        'skyline-gradient': 'linear-gradient(to right, #1F66FF, #35D3F9)',
        'afterglow-gradient': 'linear-gradient(to right, #1F66FF, #5D73FF)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-sora)'],
      },
    },
  },
  plugins: [],
}; 