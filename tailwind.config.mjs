/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "andes-yellow": "#FFD02A",
                "gray-dark": "#2D2D2D",
                pink: "#E7526D",
                black: "#000000",
            },
        }
    },
    plugins: [],
};
