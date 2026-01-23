const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./apps/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        night: '#04020d',
        midnight: '#070b18',
        'plasma-pink': '#ff4fd8',
        'ion-blue': '#32f5ff',
        'laser-lime': '#c6ff4d',
        'glass-dark': 'rgba(12, 18, 40, 0.72)',
      },
      backgroundImage: {
        'plasma-grid':
          'radial-gradient(circle at 15% 20%, rgba(255,59,191,0.35), transparent 45%), radial-gradient(circle at 85% 15%, rgba(25,179,255,0.32), transparent 40%), radial-gradient(circle at 40% 80%, rgba(198,255,77,0.3), transparent 45%), linear-gradient(120deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(60deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'hero-aurora':
          'linear-gradient(140deg, rgba(50,245,255,0.18), rgba(255,79,216,0.25), rgba(8,9,29,0.9))',
      },
      boxShadow: {
        'glass-neon': '0 25px 90px rgba(4, 2, 13, 0.9)',
        'neon-card': '0 10px 50px rgba(28, 199, 255, 0.25)',
      },
      fontFamily: {
        sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
        display: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
        script: ['Playball', 'cursive'],
      },
      animation: {
        float: 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
