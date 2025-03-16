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
        fontFamily:{},
        extend:{
            backgroundImage:{},
        },
    },
    plugins:[],
};