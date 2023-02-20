const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "background": "var(--background)",
        "foreground": "var(--foreground)",
        "stroke": "var(--stroke)",
        "muted": "var(--muted)",
        "light-grey": "var(--light-grey)",
        "mid-grey": "var(--mid-grey)",
        "text": "var(--text)",
        "dark-primary": "var(--dark-primary)",
        "dark-background": "var(--dark-background)",
        "dark-foreground": "var(--dark-foreground)",
        "dark-stroke": "var(--dark-stroke)",
        "dark-muted": "var(--dark-muted)",
        "dark-light-grey": "var(--dark-light-grey)",
        "dark-mid-grey": "var(--dark-mid-grey)",
        "dark-text": "var(--dark-text)",
        
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-gambetta)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
