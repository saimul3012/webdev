/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Single source of truth for the brand gradient stops.
        brand: {
          orange: '#ff8a3d',
          pink: '#ff4d8d',
          violet: '#8b5cf6',
          ink: '#1f2340',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -18px rgba(31, 35, 64, 0.35)',
        soft: '0 18px 40px -24px rgba(139, 92, 246, 0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        devstack: {
          primary: '#ff4d8d',
          secondary: '#8b5cf6',
          accent: '#ff8a3d',
          neutral: '#1f2340',
          'base-100': '#ffffff',
          'base-200': '#f6f7fb',
          'base-300': '#e9ebf3',
          'base-content': '#1f2340',
          info: '#3abff8',
          success: '#22c55e',
          warning: '#f59e0b',
          error: '#ef4444',
          '--rounded-box': '1rem',
          '--rounded-btn': '0.75rem',
          '--rounded-badge': '9999px',
          '--animation-btn': '0.2s',
          '--animation-input': '0.2s',
          '--btn-focus-scale': '0.97',
        },
      },
    ],
  },
}
