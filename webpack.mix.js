// webpack.mix.js

let mix = require("laravel-mix");

mix.js("src/js/app.js", "js").css("src/css/app.css", "css").setPublicPath("public");
mix.copy("src/fonts", "public/fonts");
mix.browserSync({
    watch: "public",
    server: "public",
    baseDir: "public",
    files: ["public/*.html"],
});