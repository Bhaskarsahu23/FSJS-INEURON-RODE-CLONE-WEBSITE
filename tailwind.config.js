/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1048px',
        },
        extend: {
            colors: {
                rode1: '#ac996f',
                rode2: '#f8f9fb',
            },

            backgroundImage: {
                'hero-large': "url('/asset/hero-image.jpg')",
                'hero-large-1': "url('/asset/rode-nth100.jpg')",
                'hero-large-2': "url('/asset/rode-nt.jpg')",
                'hero-large-3': "url('/asset/rode-podmic.jpg')",
                'hero-large-4': "url('/asset/WIGOII-WEBHEADER.jpg')",
                'hero-large-5': "url('/asset/rode-nt-usb.jpg')",
            },
            fontFamily: {
                Inter: "'Inter', sans-serif",
            },
        },
    },
    plugins: [],
};
