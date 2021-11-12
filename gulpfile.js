const sass = require('gulp-sass')(require('sass')); //require gulp-sass
const { src, dest, watch, parallel } = require("gulp");// create consts for browsersync
const sync = require("browser-sync").create(); //require browsersync

//sassy stuff
function generateCSS(cb) {
    src('app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('app/css'))
        .pipe(sync.stream());
    cb();
}

//watchFiles
function watchFiles(cb) {
    watch('sass/**.scss', generateCSS);
}

//browsersync
function browserSync(cb) {
    sync.init({
        server: {
            baseDir: "app"
        }
    });
    watch('app/scss/**.scss', generateCSS);
    watch("app/**.html").on('change', sync.reload);
    watch('app/js/**/*.js').on('change', sync.reload);
}

exports.watch = watchFiles;

exports.sync = browserSync;

exports.css = generateCSS;