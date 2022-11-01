const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/**/*.{html,js,jsx}'],
    theme: {
        // Extend default configurations
        extend: {
            colors: {
                green: '#008676',
                gray: '#f7f8f8',
            },
            container: {
                center: true,
            },
            screens: {
                'sm-tablet': '250px',
                'sm-laptop': '300px',
                'sm-desktop': '400px',
                'sm-screen': '500px',

                'md-tablet': '600px',
                'md-laptop': '700px',
                'md-desktop': '800px',
                'md-screen': '900px',

                'lg-tablet': '960px',
                'lg-laptop': '1024px',
                'lg-desktop': '1080px',
                'lg-screen': '1140px',

                'xl-tablet': '1200px',
                'xl-laptop': '1300px',
                'xl-desktop': '1350px',
                'xl-screen': '1420px',
                '2xl-screen': '1600px',
            },
        },
    },
    plugins: [],
}
