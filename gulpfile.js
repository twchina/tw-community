var gulp = require('gulp');
var git = require('gulp-git');

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

gulp.task('deploy', function () {
    git.init({
        cwd: 'dist/'
    });
    gulp.src('dist/**')
        .pipe(git.add({args: '-A'}))
        .pipe(git.commit('deploy'))
        .pipe(git.push('https://github.com/twchina/tw-community.git','gh-pages', {
            args : '-f'
        }))
});
