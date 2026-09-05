/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0a0d12',
          panel: '#10141b',
          panel2: '#151b24',
          border: '#232b37',
        },
        ink: {
          DEFAULT: '#e9edf2',
          muted: '#8d99a8',
          faint: '#5b6675',
        },
        signal: {
          DEFAULT: '#4c7fff',
          soft: '#7fa1ff',
          dim: '#1b2947',
        },
        brass: {
          DEFAULT: '#c9a227',
          soft: '#e4c667',
          dim: '#2c2617',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1140px',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-14px, 10px)' },
        },
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        drift: 'drift 14s ease-in-out infinite',
        riseIn: 'riseIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}
