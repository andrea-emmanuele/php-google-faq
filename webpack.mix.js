let mix = require('laravel-mix');

mix.sass('src/scss/style.scss', 'assets/css/style.css').options({
    processCssUrls: false
});