/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],

    daisyui: {
        themes: [
            {
                resaleTheme: {
                    primary: "#eab308",
                    secondary: "#ef4444",
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
        extend: {},
    },
    plugins: [require("daisyui")],
};
