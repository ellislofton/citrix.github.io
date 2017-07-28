const gulp = require('gulp');
var gutil = require('gulp-util');
const child = require('child_process');


gulp.task('default', function() {
    //gutil.log('== Cleaning site... ==')
    //const jekyll = child.spawn('jekyll', ['clean']);

    gutil.log('== Building site... ==')
    const jekyll = child.execSync('jekyll build');

    const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };
  gutil.log('== Copying jquery files ==')
  gulp.src('./node_modules/jquery/dist/jquery.min.js')
    .pipe((gulp.dest('./_site/assets/')))
  
    gutil.log('== Copying tether files ==')
  gulp.src('./node_modules/tether/dist/js/tether.min.js')
    .pipe((gulp.dest('./_site/assets/')))

  gutil.log('== Copying bootstrap files ==')
  gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe((gulp.dest('./_site/assets/')))
});
