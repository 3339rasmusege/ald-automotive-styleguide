var gulp = require('gulp');
var shell = require('gulp-shell');
var args = require('yargs').argv;

// Remove utility
// Run like this: `gulp rmu --name NameOfUtility`
var name = args.name;
gulp.task('removeUtility', shell.task([
  'sh gulp-tasks/bash-scripts/remove-utility.sh '+name,
]));

// Task shorthands
gulp.task('rmUtility',   ['removeUtility']);
gulp.task('rmu',         ['removeUtility']);
gulp.task('ru',          ['removeUtility']);
