
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    changed = require('gulp-changed'),
    del = require('del');

var env = process.env.NODE_ENV || 'heroku';


gulp.task('js.app', function() {
  var sources = [
    'app/app.js',
    'app/config/config.' + env + '.js',
    'app/config/routes.js',
    'app/modules/user/user-role.js',
    'app/modules/user/access-level.js',
    'app/modules/user/service.js',
    'app/modules/user/controller.js'
  ];

  return gulp.src(sources)
      .pipe(concat('app.js'))
      .pipe(gulp.dest('public/js/'));
});


gulp.task('js.vendor', function() {
  var sources = [
      'bower_components/angular/angular.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/lodash/dist/lodash.js',
      'bower_components/restangular/dist/restangular.js',
      'bower_components/ngstorage/ngStorage.js'
  ];

  return gulp.src(sources)
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest('public/js/'));
});


gulp.task('styles', function() {
  var sources = [
      'bower_components/pure/pure.css',
      'app/css/app.css'
  ];

  return gulp.src(sources)
      .pipe(concat('styles.css'))
      .pipe(gulp.dest('public/css/'));
});


gulp.task('templates', function() {
  return gulp.src('app/**/*.html')
      .pipe(changed('public'))
      .pipe(gulp.dest('public'))
});


gulp.task('images', function() {
  return gulp.src('app/img/*')
      .pipe(changed('public/img'))
      .pipe(gulp.dest('public/img'))
});


gulp.task('fonts', function() {
  return gulp.src('app/fonts/*')
      .pipe(changed('public/fonts'))
      .pipe(gulp.dest('public/fonts'))
});


gulp.task('clean', function(cb) {
  del(['./public/**/'], cb);
});


gulp.task('build', ['clean'], function() {
  gulp.start('js.app', 'js.vendor', 'styles', 'templates', 'images', 'fonts');
});


gulp.task('make', ['clean'], function() {
  gulp.start('js.app', 'styles', 'templates');
});


gulp.task('default', ['make'], function() {});
