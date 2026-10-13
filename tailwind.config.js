/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#050811",
          card: "#0b1120",
          cardHover: "#111b33",
          border: "#1e293b",
          borderGlow: "#00f0ff33",
          cyan: "#00f0ff",
          blue: "#38bdf8",
          purple: "#a855f7",
          violet: "#6366f1",
          muted: "#94a3b8",
          dark: "#03060d"
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Orbitron', 'Space Grotesk', 'sans-serif']
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 240, 255, 0.3)',
        'glow-cyan-lg': '0 0 50px -10px rgba(0, 240, 255, 0.4)',
        'glow-purple': '0 0 30px -5px rgba(168, 85, 247, 0.3)',
        'cyber-border': 'inset 0 0 0 1px rgba(0, 240, 255, 0.2)',
      },
      backgroundImage: {
        'cyber-grid': "radial-gradient(circle at center, rgba(0, 240, 255, 0.08) 1px, transparent 1px)",
        'circuit-pattern': "linear-gradient(to right, rgba(0, 240, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 240, 255, 0.03) 1px, transparent 1px)"
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
