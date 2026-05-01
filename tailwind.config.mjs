/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        mac: {
          bg: '#f3f4f6', // Light gray desktop background or wallpaper
          surface: '#ffffff',
          border: '#e5e7eb',
          text: '#111827',
          muted: '#6b7280',
          accent: '#0066cc', // macOS blue
          titlebar: '#f3f4f6',
        },
      },
      boxShadow: {
        'mac-window': '0 20px 40px -10px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
};
