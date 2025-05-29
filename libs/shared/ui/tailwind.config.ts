import type { Config } from 'tailwindcss';

// Minimal config for the shared UI library development/testing
// This should NOT be imported by consuming applications
const config: Config = {
  content: [
    './src/**/*.{ts,tsx,js,jsx,html}',
    '!./src/**/*.{stories,spec}.{ts,tsx,js,jsx,html}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      // Minimal theme for library development
      // Components use CSS variables so they work with any theme
      colors: {
        border: 'hsl(var(--border, 214.3 31.8% 91.4%))',
        background: 'hsl(var(--background, 0 0% 100%))',
        foreground: 'hsl(var(--foreground, 222.2 84% 4.9%))',
        primary: {
          DEFAULT: 'hsl(var(--primary, 222.2 47.4% 11.2%))',
          foreground: 'hsl(var(--primary-foreground, 210 40% 98%))',
        },
        // Add fallback values for development
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

// Export for library development only - NOT for consumption
export default config;

// Optional: Export utilities for apps that want to extend specific parts
export const sharedPlugins = [require('tailwindcss-animate')];
export const sharedAnimations = {
  keyframes: {
    'accordion-down': {
      from: { height: '0' },
      to: { height: 'var(--radix-accordion-content-height)' },
    },
    'accordion-up': {
      from: { height: 'var(--radix-accordion-content-height)' },
      to: { height: '0' },
    },
  },
  animation: {
    'accordion-down': 'accordion-down 0.2s ease-out',
    'accordion-up': 'accordion-up 0.2s ease-out',
  },
};
