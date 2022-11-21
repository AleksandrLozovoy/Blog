const { src, dest, watch, series, paralel, parallel } = require("gulp");
const browserSync = require("browser-sync").create();

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");

// обработка HTML
const html = () => {
  return src("./src/html/*.html")
    .pipe(
      plumber({
        errorHandler: notify.onError(),
      })
    )
    .pipe(fileInclude())
    .pipe(size({ title: "До сжатия" }))
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(size({ title: "После сжатия" }))
    .pipe(dest("./public"))
    .pipe(browserSync.stream());
};

// Cервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: "./public",
    },
  });
};

// Наблюдение
const watcher = () => {
  watch("./src/html/**/*.html", html);
};

// Задачи
exports.html = html;
exports.watch = watcher;

// сборка
exports.dev = series(html, parallel(watcher, server));
