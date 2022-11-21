const { watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();

// Конфигурация
const path = require("./config/path.js");

// Задачи
// const clear = require("./task/clear.js");
const html = require("./task/html.js");

// Cервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  });
};

// Наблюдение
const watcher = () => {
  watch(path.html.watch, html).on("all", browserSync.reload);
};

// Задачи
exports.html = html;
exports.watch = watcher;
// exports.clear = clear;

// сборка
exports.dev = series(/* clear, */ html, parallel(watcher, server));
