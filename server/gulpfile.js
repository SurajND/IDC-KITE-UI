let gulp = require('gulp'),
    autoprefixer = require('autoprefixer'),
    minifycss = require('gulp-clean-css'),
    minifyhtml = require('gulp-minify-html'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    minifyjs = require('gulp-uglify'),
    uglify = require('gulp-uglifyes'),
    cachebust = require('gulp-cache-bust'),
    browserSync = require('browser-sync').create();

gulp.task('default', () => {
    console.log('hello world');
});

gulp.task('minifycss', () => {
    return gulp.src('../client/css/**/*.+(css|sass|scss)')
        .pipe(minifycss())
        .pipe(postcss([autoprefixer]))
        .pipe(gulp.dest('../release/client/css'));
});

gulp.task('minifyjs', () => {
    return gulp.src('../client/js/**/*.js')
        .pipe(uglify({
            mangle: false,
            ecma: 6
        }).on('error', (e) => {
            console.log(e);
        }))
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(gulp.dest('../release/client/js'));
});

gulp.task('minifyhtml', () => {
    return gulp.src('../client/**/*.html')
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(minifyhtml())
        .pipe(gulp.dest('../release/client'));
});

gulp.task('images', () => {
    return gulp.src('../client/images/**/*')
        .pipe(gulp.dest('../release/client/images'));
});

gulp.task('external', () => {
    return gulp.src('../client/external/**/*')
        .pipe(gulp.dest('../release/client/external'));
});

gulp.task('lib', () => {
    return gulp.src('../lib/**/*')
        .pipe(gulp.dest('../release/lib'));
});

gulp.task('server', () => {
    return gulp.src(['./**/*', '!./node_modules/**/*'])
        .pipe(gulp.dest('../release/server'));
});

gulp.task('watch', ['minifycss', 'minifyjs', 'minifyhtml'], () => {
    gulp.watch('../client/css/**/*.+(css|sass|scss)', ['minifycss']);
    gulp.watch('../client/js/**/*.js', ['minifyjs']);
    gulp.watch('../client/**/*.html', ['minifyhtml']);
});

//ToDo - need to integrate browserSync

gulp.task('build', ['minifycss', 'minifyjs', 'minifyhtml', 'images', 'external', 'lib', 'server'], () => {
    console.log('Building...');
});