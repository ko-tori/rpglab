var gulp = require("gulp");
var concatjs = require("gulp-concat");
var sourcemaps = require("gulp-sourcemaps");

gulp.task('concat-js', function(){
  return gulp.src([
			// external libraries
			//"ext/jquery.min.js",
			//"ext/socket.io.min.js",

			// other libs
			"lib/Vec2.js",
			"lib/Camera.js",
			"lib/Map.js",
			"lib/Sprite.js",
			"lib/RectRenderer.js",

			// main stuff
			"lib/Main.js"
		])
    .pipe(sourcemaps.init())
    .pipe(concatjs("rpglab.js"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('static'))
});

gulp.task("default", function() {
	gulp.start("concat-js");
});