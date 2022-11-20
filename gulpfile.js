const { src, dest } = require("gulp");

// Плагины
const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");

// обработка HTML
const html = () => {
  return src("./src/html/*.html")
    .pipe(fileInclude())
    .pipe(size({ title: "До сжатия" }))
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(size({ title: "После сжатия" }))
    .pipe(dest("./public"));
};

// Задачи
exports.html = html;
