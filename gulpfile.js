var gulp = require('gulp');

var Builder = require('jspm').Builder;

gulp.task('bundle', function(callback) {
    var builder = new Builder('./', './config.js');


    builder.buildStatic('./src/app.ts', './bin/app.js').then(function() {
        callback();
    })
});