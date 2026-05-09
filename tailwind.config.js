/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Clash Display", "sans-serif"],
        body:    ["Satoshi", "sans-serif"],
      },
      colors: {
        // Violet/indigo accent — stunning in dark mode
        accent: "#7C3AED",
        "accent-light": "#A78BFA",
        "accent-glow":  "rgba(124,58,237,0.15)",
        bg:      "#080810",
        surface: "#0F0F1A",
        card:    "#13131F",
        border:  "#1E1E30",
      },
      animation: {
        fadeUp:  "fadeUp 0.45s cubic-bezier(0.4,0,0.2,1) both",
        blink:   "blink 1s step-end infinite",
        float:   "float 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)"    },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%":     { opacity: "0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)"  },
          "50%":     { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
