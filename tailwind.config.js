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
        // Apple-inspired colors
        'apple-gray': {
          50: '#f9f9f9',
          100: '#f2f2f2',
          200: '#e5e5e5',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#8a8a8a',
          600: '#636363',
          700: '#484848',
          800: '#2a2a2a',
          900: '#1d1d1d',
        },
        'apple-blue': {
          50: '#f0f8ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Keep some original colors for compatibility
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
        'apple-gradient': 'linear-gradient(135deg, #f9f9f9 0%, #f2f2f2 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'builders': ['var(--font-roboto-condensed)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-inter)', 'system-ui', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'apple': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'apple-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'apple-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}; 