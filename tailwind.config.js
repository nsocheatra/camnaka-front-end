/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "cam-blue": "#2F80B7",
        "naka-pink": "#D63A6C",
        "accent-orange": "#F2994A",
        "accent-yellow": "#F2B94B",
        "light-bg": "#F7F9FB",
        "dark-text": "#1F2933",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#2F80B7",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#D63A6C",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F7F9FB",
          foreground: "#1F2933",
        },
        accent: {
          DEFAULT: "#F2994A",
          foreground: "#1F2933",
        },
        destructive: {
          DEFAULT: "#D63A6C",
          foreground: "#FFFFFF",
        },
        border: "#E8EEF5",
        input: "#F7F9FB",
        ring: "#2F80B7",
        chart: {
          "1": "#2F80B7",
          "2": "#D63A6C",
          "3": "#F2994A",
          "4": "#F2B94B",
          "5": "#1F2933",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}