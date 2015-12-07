var gulp = require('gulp');
var mtry = require('./gulp-plugin/my-try.js');
var exec = require('child_process').exec;
gulp.task('html', function () {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
    return gulp.src('src/css/**')
        .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function () {
    return gulp.src('src/js/**')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('angular', function () {
    return gulp.src('src/lib/components/angular*/angular*.js')
        .pipe(gulp.dest('dist/lib/components/'));
})

gulp.task('jquery', function () {
    return gulp.src('src/lib/components/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('dist/lib/components/jquery/dist'));
})

gulp.task('bootstrap', function () {
    return gulp.src('src/lib/components/bootstrap/dist/**')
        .pipe(gulp.dest('dist/lib/components/bootstrap/dist'));

})

gulp.task('dist', ['html', 'css', 'js', 'angular', 'jquery', 'bootstrap'], function (cb) {
    console.log('finish');
    cb();
});

gulp.task('deploy', function (cb) {
    exec('cd dist;git init;git add -A;git commit -m "update";git push -f https://github.com/twchina/tw-community.git master:gh-pages;',
        function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            cb(err);
        });
});

gulp.task('try', () => {
    return gulp.src('*')
        .pipe(mtry.sample())
        .pipe(mtry.sample2());
});
