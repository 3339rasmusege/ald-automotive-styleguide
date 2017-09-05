var gulp = require('gulp');
var shell = require('gulp-shell');
var args = require('yargs').argv;

// Generate component
// Run like this: `gulp gc --name NameOfComponent`
var name = args.name;
gulp.task('generateComponent', shell.task([
  'sh gulp-tasks/bash-scripts/generate-component.sh '+name,
]));

// Task shorthands
gulp.task('gComponent', ['generateComponent']);
gulp.task('gc',         ['generateComponent']);
