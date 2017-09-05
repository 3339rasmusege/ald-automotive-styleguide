var gulp = require('gulp');
var shell = require('gulp-shell');

// Help
gulp.task('help', function() {
  console.log('');
  console.log('Start a local server:        `gulp s`');
  console.log('Build for development:       `gulp build`');
  console.log('Build for production:        `gulp production`');
  console.log('');
  console.log('Generate component:          `gulp gc --name ComponentName`');
  console.log('Remove component:            `gulp rc --name ComponentName`');
  console.log('Generate utility:            `gulp gu --name utilName`');
  console.log('Remove utility:              `gulp ru --name utilName`');
  console.log('');
});

// Task shorthands
gulp.task('h', ['help']);
