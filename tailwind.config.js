const theme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  content: [
    "content/**/*.md",
    "layouts/**/*.html",
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html",
  ],
  safelist: ['pagination', 'page-item'],
  darkMode: "class", // 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        darkest: theme(`colors.stone.900`),
        darker: theme(`colors.stone.800`),
        dark: theme(`colors.stone.700`),
      }),
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "code::before": false,
            "code::after": false,
            a: {
              color: theme(`colors.blue.600`),
              textDecoration: "none",
              "&:hover": {
                color: theme(`colors.blue.800`),
                textDecoration: "underline",
              },
            },
            pre: {
              backgroundColor: theme(`colors.stone.200`),
              color: theme(`colors.gray.700`),
            },
            code: { color: theme(`colors.gray.700`) },
          },
        },
        invert: {
          css: {
            color: theme(`colors.gray.200`),
            a: {
              color: theme(`colors.yellow.300`),
              "&:hover": { color: theme(`colors.yellow.500`) },
            },
            h1: { color: theme(`colors.gray.200`) },
            h2: { color: theme(`colors.gray.200`) },
            h3: { color: theme(`colors.gray.200`) },
            h4: { color: theme(`colors.gray.200`) },
            h5: { color: theme(`colors.gray.200`) },
            h6: { color: theme(`colors.gray.200`) },
            strong: { color: theme(`colors.gray.200`) },
            td: { color: theme(`colors.gray.200`) },
            blockquote: { color: theme(`colors.gray.200`) },
            pre: {
              backgroundColor: theme(`colors.stone.700`),
            },
            code: { color: theme(`colors.gray.200`) },
          },
        },
      }),
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["Merriweather", "Georgia", "serif"],
        serif: ["Merriweather", "Georgia", "serif"],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
    },
  },
  variants: { typography: ["invert"], extend: {} },
  plugins: [require("@tailwindcss/typography")],
};
