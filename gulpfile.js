var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var replace = require('gulp-replace');
var rename = require('gulp-rename');
var runSequence = require('run-sequence'); // Run gulp tasks in sequence (and not simultaneously)
var remove = require('del');
var randomString = require('randomstring');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var source = require('vinyl-source-stream');
var imagemin = require('gulp-imagemin');
var requireDir = require('require-dir');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

requireDir('./gulp-tasks');

gulp.task('html', function() {
  return gulp.src(['./src/pages/**/*.+(html|nunjucks)'])
    .pipe(data(function() {
      return require('./src/data/data.json')
    }))
    .pipe(nunjucksRender({
      path: [
        './src/templates'
      ]
    }))
    .pipe(gulp.dest('./docs'))
});

gulp.task('compressHtml', function() {
  return gulp.src('./docs/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyJS: true
    }))
    .pipe(gulp.dest('./docs'));
});

gulp.task('css', function() {
  return gulp.src('./src/scss/app.scss')
    .pipe(sassGlob({
      ignorePaths: [
        '**/utilities/variables.scss',
        '**/utilities/mixins.scss',
        '**/utilities/fonts.scss',
        '**/utilities/reset.scss'
        ]
    }))
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./docs'))
    .pipe(browserSync.stream())
});

gulp.task('compressCss', function() {
  return gulp.src('./docs/app.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./docs'))
});

// gulp.task('js', function() {
//   return gulp.src(['./src/js/index.js'])
//     .pipe(concat('app.js'))
//     .pipe(babel({presets: ['env']}))
//     .pipe(gulp.dest('./docs'))
//     .pipe(browserSync.stream())
// });

gulp.task('js', function() {
  return browserify(['./src/js/index.js'])
    .transform(babelify, {presets: ["es2015"]})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./docs'))
    .pipe(browserSync.stream())
    .pipe(buffer())
});

gulp.task('moveJsFallbacks', function() {
   gulp.src('./src/js/fallbacks/**/*.js')
   .pipe(gulp.dest('./docs'))
});

gulp.task('compressJs', function() {
  return gulp.src('./docs/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('./docs'))
});

gulp.task('images', function() {
  return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./docs/images'))
});

gulp.task('moveFavicons', function() {
   gulp.src('./src/favicons/**/*')
   .pipe(gulp.dest('./docs'))
});

gulp.task('moveFonts', function() {
   gulp.src('./src/fonts/**/*')
   .pipe(gulp.dest('./docs/fonts'))
});

gulp.task('devServer', ['css', 'js'], function() {
  browserSync.init({
    server: {
      baseDir: "./docs",
    },
    notify: false,
    gohstMode: false
  });
  gulp.watch("src/**/*.scss", ['css']);
  gulp.watch("src/**/*.js", ['js']);
  gulp.watch("src/images/**/*", ['images', browserSync.reload]);
  gulp.watch("src/**/*.html", ['html', browserSync.reload]);
});

// Dev server
gulp.task('serve', function(done) {
  runSequence('build', function() {
    runSequence('devServer')
    done();
  });
});

gulp.task('s', ['serve']);

// Random string for cache busting
var cachebustFilename = randomString.generate({length: 5,});

// Rename references to css and js assets
gulp.task('renameAssetRefs', function() {
  return gulp.src('./docs/**/*.html')
    .pipe(replace('app.css', cachebustFilename+'.css'))
    .pipe(replace('app.js', cachebustFilename+'.js'))
    .pipe(gulp.dest('./docs/'))
});

// Rename app.css for cache busting
gulp.task('renameAppCss', function() {
  return gulp.src('./docs/app.css')
    .pipe(rename(cachebustFilename+'.css'))
    .pipe(gulp.dest('./docs/'))
});

// Rename app.js for cache busting
gulp.task('renameAppJs', function() {
  return gulp.src('./docs/app.js')
    .pipe(rename(cachebustFilename+'.js'))
    .pipe(gulp.dest('./docs/'))
});

// Cachebust
gulp.task('cachebust', [
  'renameAssetRefs',
  'renameAppCss',
  'renameAppJs'
]);

// Remove unwanted files
gulp.task('removeUnwantedFiles', function() {
  return remove([
    './docs/app.css',
    './docs/app.js'
  ]);
});

// Remove build folder
gulp.task('removeBuild', function() {
  return remove([
    './docs'
  ]);
});

// Build for development
gulp.task('build', function(done) {
  runSequence(
    'removeBuild', 'html', 'css', 'js', 'images', 'moveFonts', 'moveJsFallbacks', function() {
    done();
  });
});

// Build for production
gulp.task('production', function(done) {
  runSequence(
    'removeBuild', 'build', 'compressCss', 'compressJs', 'compressHtml', 'moveFavicons', function() {
    runSequence('cachebust', 'removeUnwantedFiles')
    done();
  });
});
// Short hands for `production`
gulp.task('prod', ['production']);
gulp.task('p',    ['production']);

// Default task - references 'build' task
gulp.task('default', ['build']);
