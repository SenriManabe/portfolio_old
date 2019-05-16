var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var imagemin = require('gulp-imagemin');
var pngquant  = require('imagemin-pngquant');
var jpegtran  = require('imagemin-jpegtran');

gulp.task('watch',function(){
	gulp.watch('./sass/*.scss', ['sass']);
	gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('sass', function(){
	//scssディレクトリの指定
	gulp.src('./sass/*.scss')
	.pipe(sassGlob())
	//コンパイル実行
	.pipe(sass({style : 'expanded'})) //出力形式の種類　#nested, compact, compressed, expanded.
	//出力先の指定
	.pipe(gulp.dest('./css'));
});
 
gulp.task('imgCompress', () =>
    gulp.src('img/**/*')
        .pipe(imagemin([
        	pngquant(),
        	jpegtran({
        		quality:85
        	})
        ]))
        .pipe(gulp.dest('img'))
);