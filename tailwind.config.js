/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      width: {
        logo: "3.5rem",
        tab: "75%",
        tabIcon: "4rem",
      },
      height: {
        header: "4rem",
        view: "calc(100vh - 4rem)",
        tabIcon: "4rem",
      },
    },
    borderColor: {
      primary: "#f52812",
    },
    backgroundColor: {
      primary: "#f52812",
      secondary: "#ffffff",
      red: "#f52812",
    },
    textColor: {
      primary: "#000000",
      secondary: "#f52812",
      terciary: "#ffffff",
    },
    fontSize: {
      "2xs": ".75rem",
      xs: "1rem",
      sm: "1.25rem",
      base: "1.5rem",
      lg: "1.75rem",
      xl: "2rem",
      "2xl": "2.25rem",
    },
    fontFamily: {
      sans: ["Urbanist", "sans-serif"],
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      bold: "700",
    },
    borderRadius: {
      none: "0",
      mid: "50%",
    },
  },
  plugins: [],
}
