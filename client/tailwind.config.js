module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "media",
    theme: {
        extend: {}
    },

    variants: {
        extend: {
            padding: ["hover"],
            maxHeight: ["focus"],
            backgroundColor: ["active"]
        }
    },
    plugins: []
};