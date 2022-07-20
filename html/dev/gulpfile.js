"use strict";

const gulp = require("gulp");
const gulpDartSass = require('gulp-dart-sass')
const sassGlob = require('gulp-sass-glob-use-forward')
const autoprefixer = require('gulp-autoprefixer');
const ejs = require("gulp-ejs");
const pug = require("gulp-pug");
const webp = require('gulp-webp');

function task_sass() {
  return gulp
    .src("./sass/style.scss")
    .pipe(sassGlob())
    .pipe(gulpDartSass({
        includePaths: ['src/sass'],
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest("../assets/css/"))
}

function task_pug() {
  return gulp
    .src(["pug/**/*.pug", "!pug/**/_*.pug"])
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest("../"));
}

function task_ejs() {
  return gulp
    .src(["ejs/**/*.ejs", "!ejs/**/_*.ejs"])
    .pipe(ejs())
    .pipe(ejs({}, {}, {"ext": ".html"}))
    .pipe(gulp.dest("../"))
}

function task_webp() {
  return gulp
    .src(["../assets/img/**/*.{png,jpg,jpeg}"])
    .pipe(rename(function (path) {
      path.basename += path.extname;
    }))
    .pipe(webp())
    .pipe(gulp.dest("../assets/img"))
}

function task_watch() {
  gulp.watch("./sass/**/*", task_sass);
  gulp.watch(["pug/", "!pug/**/_*.pug"], task_pug);
  gulp.watch(["ejs/", "!ejs/**/_*.ejs"], task_ejs);
}

const watch = gulp.parallel(task_watch);
const build = gulp.series(task_sass, watch);


exports.sass    = task_sass;
exports.pug     = task_pug;
exports.ejs     = task_ejs;
exports.webp    = task_webp;
exports.watch   = watch;
exports.default = build;