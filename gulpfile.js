//https://www.neoguias.com/gulp/#Instalacion_de_Gulp
//https://gulpjs.com/docs/en/getting-started
const gulp = require("gulp"); //requerido para usar gulp
const cssnano = require("gulp-cssnano"); //minifica codigo CSS
const autoprefixer = require("autoprefixer"); //Se usa para agregar los prefijos vendor al código CSS resultante, estableciendo reglas particulares para cada navegador.
const postcss = require("gulp-postcss"); //Sirve para transformar el código CSS mediante plugins JavaScript. Para más información, consulta el tutorial de PostCSS.
const sourcemaps = require("gulp-sourcemaps");//Genera los SourceMap
const uglify = require("gulp-uglify");//Minifica codigo JS
const rename = require("gulp-rename");//Renombra los archivos generado (ej: de *js a *.min.js)

/* Para utilizarlo colocar los archivos .js deseados dentro de src/js
    Ejecutar en la consola ubicados en el directorio del proyecto el comando gulp
    Los archivos seran minificados y se creara su respectivo .map.js dentro de la ruta
    dist/js    
*/
/* gulp.task("default", function () {
  gulp
    .src("./src/js/*.js")
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./dist/js/"));
}); */

/* gulp.task("default", function () {
  gulp.watch("./src/js/*.js", gulp.series("tarea"));
}); */

/* Para utilizarlo colocar los archivos .css deseados dentro de src/css
    Ejecutar en la consola ubicados en el directorio del proyecto el comando gulp
    Los archivos seran minificados y se creara su respectivo .map.css dentro de la ruta
    dist/css    
*/
gulp.task('default', function() {
    gulp.src('src/css/**/*.css')
      .pipe(sourcemaps.init())
      .pipe(postcss([ autoprefixer({
        Browserlst: [
          "> 1%",
          "ie >= 8",
          "edge >= 15",
          "ie_mob >= 10",
          "ff >= 45",
          "chrome >= 45",
          "safari >= 7",
          "opera >= 23",
          "ios >= 7",
          "android >= 4",
          "bb >= 10"
        ],
        cascade: false,
      }) ]))
      .pipe(cssnano())
      .pipe(rename({ extname: ".min.css"}))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/css'));
  });

 /*  gulp.task('default', function() {
    gulp.watch('src/css/*.css', gulp.series('tareas'));
  }); */
