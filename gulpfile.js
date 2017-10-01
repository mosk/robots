"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var unwrapAtMedia = require("postcss-unwrap-at-media");
var spritesmith = require('gulp.spritesmith');

gulp.task("style", function() {
    gulp.src("less/style.less")
        .pipe(plumber())
        .pipe(less())
        .pipe(postcss([
            autoprefixer({
                browsers: [
                    "last 3 versions"
                ]
            }),
            mqpacker({
                sort: true
            })
        ]))
        .pipe(gulp.dest("css"))
        .pipe(minify())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("css"))
        .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
    server.init({
        server: ".",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch("less/**/*.less", ["style"]);
    gulp.watch("*.html").on("change", server.reload);
});

gulp.task("ie", function() {
    gulp.src("css/style.css")
        .pipe(postcss([unwrapAtMedia]))
        .pipe(rename("style-ie.css"))
        .pipe(gulp.dest('css'));
});

gulp.task("ie-minify", function() {
    gulp.src("css/style-ie.css")
        .pipe(minify())
        .pipe(rename("style-ie.min.css"))
        .pipe(gulp.dest("css"));
});