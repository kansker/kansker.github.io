const mix = require('laravel-mix');
const path = require('path'); 
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
  mix.autoload({
    'jquery': ['$', 'window.jQuery', 'jQuery'],
})
 
mix.webpackConfig({
    resolve: {
    	  symlinks: false,
        alias: {
            'Api': path.resolve(__dirname, 'resources/js/api/'),
            'WebServices': path.resolve(__dirname, 'resources/js/webServices/'),
            'Components': path.resolve(__dirname, 'resources/js/components/'),
            'Constants': path.resolve(__dirname, 'resources/js/constants/'),
            'Container': path.resolve(__dirname, 'resources/js/container/'),
            'Views': path.resolve(__dirname, 'resources/js/views/'),
            'Helpers': path.resolve(__dirname, 'resources/js/helpers/'),
            'Themes': path.resolve(__dirname, 'resources/js/themes/')
        }
    },
    output: {
        chunkFilename: mix.inProduction() ? "js/prod/chunks/[name]?id=[chunkhash].js" : "js/dev/chunks/[name].js"
    }
});
 
mix.js("resources/js/main.js", "public/js").vue()
   .sass("resources/js/assets/scss/_style.scss", "public/css/style.css"); 