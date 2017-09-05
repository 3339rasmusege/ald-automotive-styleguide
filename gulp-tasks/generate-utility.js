var gulp = require('gulp');
var shell = require('gulp-shell');
var args = require('yargs').argv;

// Generate utility
// Run like this: `gulp gu --name nameOfUtility`
var name = args.name;
gulp.task('generateUtility', shell.task([
  'sh gulp-tasks/bash-scripts/generate-utility.sh '+name,
]));

// Task shorthands
gulp.task('gUtility', ['generateUtility']);
gulp.task('gu',         ['generateUtility']);
