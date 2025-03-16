// tailwind.config.js
/**
 * @type {import('tailwindcss').Config}
 */

module.exports = {
    content: [
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx,mdx}",
        "./app/**/*.{js,jsx,ts,tsx,mdx}",
    ],
    theme:{
        container:{
            center:true,
            padding:"15px",
        },
        screens:{
            sm:"640px",
            md:"768px",
            lg:"960px",
            xl:"1430px",
        },
        fontFamily:{
            primary:"var(--font-cormorant-upright)",
            secondary:"var(--font-open-sans)",
        },
        extend:{
            colors:{
                primary:{
                    DEFAULT: "#787f8a"
                },
                secondary:{
                    DEFAULT: "#f3f3f3",
                },
                accent: {
                    DEFAULT: "#c7a17a",
                    hover: "#a08161",
                },
            },
            backgroundImage:{
                'hero-overlay': "url('/assets/hero-overlay.png')",
                opening_hours: "url('/assets/opening-hours/bg.png')",
                footer: "url('/assets/footer/bg.png')",
            },
        },
    },
    plugins: [],
};