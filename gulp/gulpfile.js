var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
  return gulp.src("../react/index.js")
    .pipe(babel())
    .pipe(gulp.dest("./"));
});
