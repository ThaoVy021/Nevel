export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,scss}"],
  theme: { extend: {} },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFC700",
          black: "#1F1F1F",
          white: "#D2D2D2",
        },
      },
      keyframes: {
        "slide-left-menu": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "slide-left-menu": "slide-left-menu 100ms ease-out",
      },
    },
  },
  plugins: [],
}
