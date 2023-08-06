import gulp from 'gulp';
import browser from 'browser-sync';
import htmlmin from 'gulp-htmlmin';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import gulpEsbuild from 'gulp-esbuild';

const sass = gulpSass(dartSass);

const html = () => {
  return gulp.src('source/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
}

const styles = () => {
  return gulp.src('source/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/styles'))
    .pipe(browser.stream());
}

const copy = (done) => {
  gulp.src([
    'source/fonts/*.{woff2,woff}',
    'source/images/*.{png,jpg,svg}'
  ], {
    base: 'source'
  })
    .pipe(gulp.dest('build'))
  done();
}

const scripts = () => {
  return gulp.src('source/js/main.js')
    .pipe(gulpEsbuild({
      outfile: 'bundle.js',
      bundle: true,
    }))
    .pipe(gulp.dest('build/scripts'))
    .pipe(browser.stream());
}

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

const reload = (done) => {
  browser.reload();
  done();
}

const watch = () => {
  gulp.watch('source/scss/**/*.scss', gulp.series(styles));
  gulp.watch('source/js/**/*.js', gulp.series(scripts));
  gulp.watch('source/*.html', gulp.series(html, reload));
};

const build =  gulp.parallel(
  html,
  copy,
  styles,
  scripts
);

const start = gulp.series (
  build,
  server,
  watch
);


export {build, start};
