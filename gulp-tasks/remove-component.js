var gulp = require('gulp');
var shell = require('gulp-shell');
var args = require('yargs').argv;

// Remove component
// Run like this: `gulp rmc --name NameOfComponent`
var name = args.name;
gulp.task('removeComponent', shell.task([
  'sh gulp-tasks/bash-scripts/remove-component.sh '+name,
]));

// Task shorthands
gulp.task('rmComponent', ['removeComponent']);
gulp.task('rmc',         ['removeComponent']);
gulp.task('rc',          ['removeComponent']);
