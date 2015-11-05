var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('dist', function () {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));

    gulp.src('src/css/**')
        .pipe(gulp.dest('dist/css'));

    gulp.src('src/js/**')
        .pipe(gulp.dest('dist/js'));

    gulp.src('src/lib/components/angular/angular.min.js')
        .pipe(gulp.dest('dist/lib/components/angular'));

    gulp.src('src/lib/components/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('dist/lib/components/jquery/dist'));

    gulp.src('src/lib/components/bootstrap/dist/**')
        .pipe(gulp.dest('dist/lib/components/bootstrap/dist'));
});

gulp.task('deploy', function (cb) {
    exec('cd dist;git init;git add -A;git commit -m "update";git push -f https://github.com/twchina/tw-community.git master:gh-pages;',
    function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});
