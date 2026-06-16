import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Clasnet Official Colors
        primary: {
          DEFAULT: "#27262E", // Charcoal Navy
          100: "#d4d4d5",
          200: "#a9a9ac",
          300: "#7e7e82",
          400: "#535259",
          500: "#27262E",
          600: "#1f1e25",
          700: "#17171c",
          800: "#100f12",
          900: "#080809",
        },
        secondary: {
          DEFAULT: "#E19C63", // Sandy Tan
          100: "#f9ebe0",
          200: "#f3d7c0",
          300: "#ecc3a1",
          400: "#e6af82",
          500: "#E19C63",
          600: "#b47c4f",
          700: "#875d3b",
          800: "#5a3e28",
          900: "#2d1f14",
        },
        accent: {
          DEFAULT: "#8BA5BE", // Dusty Steel Blue
          100: "#e8ecef",
          200: "#d0d9e0",
          300: "#b9c6d0",
          400: "#a2b3c1",
          500: "#8BA5BE",
          600: "#6f8498",
          700: "#536372",
          800: "#38424c",
          900: "#1c2126",
        },
        background: "#f8f9fc", 
        surface: "#ffffff", 
        "text-dark": "#27262E", 
        "text-light": "#ffffff", 
        "text-light-hover": "#e8ecef", 
        success: "#22c55e", 
        warning: "#fbbf24", 
        danger: "#f87171", 
        info: "#60a5fa", 
        
        // Override default colors for consistency
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "bounce-gentle": "bounceGentle 1s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
