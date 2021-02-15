module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        fontSize: {
            xs: ['1.2rem', '1.4rem'],
            sm: ['1.36rem', '1.56rem'],
            base: ['1.6rem', '1.8rem'],
            lg: ['1.8rem', '2rem'],
            xl: ['2rem', '2.2rem'],
            '2xl': ['2.4rem', '2.6rem'],
            '3xl': ['3rem', '3.2rem'],
            '4xl': ['3.6rem', '3.8rem'],
            '5xl': ['4.8rem', '5rem'],
            '6xl': ['6.4rem', 1],
            '7xl': ['8rem', 1],
            '8xl': ['9.8rem', 1],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
