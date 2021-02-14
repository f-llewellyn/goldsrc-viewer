// tailwind.config.js
const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
    ...defaultColors,
    ...{
        "custom-yellow": {
            "500": "#E79F4B",
        },
    },
}

module.exports = {
    "theme": {
        extend: {
            backgroundImage: theme => ({
                "main-img": "url('/dist/img/hl1-bg.jpg')"
            })
        },
        "colors": colors
    }
};