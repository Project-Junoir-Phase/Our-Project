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
      },
      spacing: {},
      fontFamily: {
        "estedad-vf": "Estedad-VF",
        neufreit: "Neufreit",
      },
    },
    fontSize: {
      xl: "20px",
      "3xl": "22px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
