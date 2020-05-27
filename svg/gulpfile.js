const gulp = require("gulp");
const svgSprite = require("gulp-svg-sprites");

gulp.task('svg_sprites', function () {
    return gulp.src('*.svg')
        .pipe(svgSprite())
        .pipe(gulp.dest("assets"));
});
