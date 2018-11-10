'use strict';

module.exports = params => {
  let { gulp, source, target, dirs, plumber, notify, gulpif, browserSync } = params;
  let input = source + '/' + dirs.data[0] + '/*.json';
  let output = target + '/' + dirs.data[1];
  gulp.task('copy', () => {    
    return gulp.src(input)
    .pipe(gulp.dest(output));
  });
};
