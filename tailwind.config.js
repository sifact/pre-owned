/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],

    daisyui: {
        themes: [
            {
                resaleTheme: {
                    primary: "#65a30d",
                    secondary: "#111827",
                    // "base-200": "#0E1525",

                    accent: "#3A4256",
                    neutral: "#3D4451",
                    info: "#1D283A",
                    "base-100": "#0F1729",
                },
            },
        ],
    },
    theme: {
        screens: {
            xsm: "360px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            xxl: "1590px",
        },
        extend: {},
    },
    plugins: [require("daisyui")],
};
