"use strict";

const gulp = require("gulp");
const gulpDartSass = require("gulp-dart-sass");
const sassGlob = require("gulp-sass-glob-use-forward");
const autoprefixer = require("gulp-autoprefixer");
const ejs = require("gulp-ejs");
const pug = require("gulp-pug");
const webp = require("gulp-webp");
const browserSync = require("browser-sync"); // 1.読み込み

function task_sass() { // 3.関数になる
    return gulp
        .src("./sass/style.scss")
        .pipe(sassGlob()) // 2.pipeで読み込み
        .pipe(
            gulpDartSass({
                includePaths: ["src/sass"],
            })
        )
        .pipe(autoprefixer())
        .pipe(gulp.dest("../assets/css/"))
}

function task_pug() {
    return gulp
        .src(["pug/**/*.pug", "!pug/**/_*.pug"])
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest("../"));
}

function task_ejs() {
    return gulp
        .src(["ejs/**/*.ejs", "!ejs/**/_*.ejs"])
        .pipe(ejs())
        .pipe(ejs({}, {}, { ext: ".html" }))
        .pipe(gulp.dest("../"));
}

function task_webp() {
    return gulp
        .src(["../assets/img/**/*.{png,jpg,jpeg}"])
        .pipe(
            rename(function (path) {
                path.basename += path.extname;
            })
        )
        .pipe(webp())
        .pipe(gulp.dest("../assets/img"));
}

function task_watch(done) {
    gulp.watch("./sass/**/*", gulp.series(task_sass, browserReload));
    gulp.watch(["pug/", "!pug/**/_*.pug"], task_pug);
    gulp.watch(["ejs/", "!ejs/**/_*.ejs"], task_ejs);
    done();
}

function browserInit(done) { // 仮想サーバーを立ち上げる
    browserSync.init({
        server: {
            baseDir: "..//",
        },
    });
    done();
}

function browserReload(done) {
    browserSync.reload();
    done();
}



const watch = gulp.parallel(task_watch, browserInit); //並行して実行したいタスク
const build = gulp.series(task_sass, watch); // 3.task_sassをseriesでbuildに. 順番に動く
// const next = gulp.series(browserReload); // 順番に動く

exports.sass = task_sass; // 2.task_sassをexportでsassに
exports.pug = task_pug;
exports.ejs = task_ejs;
exports.webp = task_webp;
// exports.browserReload = browserReload;
// exports.browserInit = browserInit; // 仮想サーバー立ち上げ

exports.watch = watch;
exports.default = build;