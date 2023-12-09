/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: "#054854",
        deepskyblue: "#00aff5",
        lightskyblue: "#acc7fa",
        slateblue: "rgba(48, 62, 191, 0.5)",
        royalblue: "#007cf5",
        mediumslateblue: "#005bf5",
        mediumblue: "#003af5",
        orchid: "#ba68c8",
        mediumorchid: {
          "100": "#bd59c9",
          "200": "#aa52b9",
        },
        lightslategray: "#6f8b90",
        powderblue: "#c0f2ff",
        purple: "#9343a3",
        black: "#000",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        "rectaw01-mediumcondensed": "RectaW01-MediumCondensed",
        "estedad-vf": "Estedad-VF",
        neufreit: "Neufreit",
        archivo: "Archivo",
        "league-gothic": "'League Gothic'",
        "kaleko105w00-bold": "Kaleko105W00-Bold",
        "anek-bangla": "'Anek Bangla'",
        futura: "Futura",
        jost: "Jost",
      },
      borderRadius: {
        "6xl": "25px",
      },
    },
    fontSize: {
      "45xl": "64px",
      xl: "20px",
      "3xl": "22px",
      lg: "18px",
      mini: "15px",
      sm: "17px",
      "8xl": "7px",
      mid: "17px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
