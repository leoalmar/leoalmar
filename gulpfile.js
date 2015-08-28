var elixir = require('laravel-elixir');
require('laravel-elixir-livereload');
require('laravel-elixir-sass-compass');

elixir.config.sourcemaps = false;

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
	
	mix.compass('app.scss','public/site/css/',{ style: "compressed", sass: "./resources/assets/site/sass" });
	//mix.compass('app.scss','public/dashboard/css/',{ style: "compressed", sass: "./resources/assets/dashboard/sass" });
    	
    mix.livereload();
});
