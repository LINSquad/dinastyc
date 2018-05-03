const gulp         = require('gulp');
const clean        = require('gulp-clean');
const copy         = require('gulp-copy');
const concat       = require('gulp-concat');
const rename       = require('gulp-rename');
const uglify       = require('gulp-uglify');
const sass         = require('gulp-sass');
const sourcemaps   = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const babel        = require('gulp-babel');
const gutil        = require('gulp-util');
const imagemin     = require('gulp-imagemin');
const chalk        = require('chalk');
const runSequence  = require('run-sequence');
const fs           = require('fs');
const gulpif       = require('gulp-if');
const file         = require('gulp-file');
const watch        = require('gulp-watch');
const handlebars   = require('gulp-compile-handlebars');
const browserSync  = require('browser-sync').create();
const path         = require('path');
const data         = require('gulp-data');

const MODE_RELEASE = 'release';
const MODE_DEBUG   = 'debug';

const argv = require('yargs')
    .option('mode', {
        alias: 'm',
        describe: 'build mode',
        default: MODE_DEBUG,
        choices: [MODE_DEBUG, MODE_RELEASE]
    })
    .option('css_replace', {
        alias: 'cr',
        describe: 'replace out css file to temp `/src/css/style_replace.css`',
        default: 'yes',
        choices: ['no', 'yes']
    })
    .argv;

const src = {
    in: {
        // scss: 'src/sass/*.scss',
        scss:        'src/scss/style.scss',
        critical_style: 'src/scss/critical.scss',
        css_replace: 'src/css/style_replace.css',
        fonts:       'src/fonts/*',
        images:      'src/images/**/*',
        js:          'src/script/modules/*.js',
        favicon:     'src/favicon/*',
        hbs:         'src/hbs/pages/*.hbs',
        hbsPartials: 'src/hbs/partials',
        jsVendors: [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/@fortawesome/fontawesome/index.js',
            'node_modules/tiny-slider/dist/tiny-slider.js'
        ],
        DS: './gulp-datastore.json',
    }
};

const dist = {
    out:   {
        dist:     'dist',
        css:      'dist/assets/style',
        fonts:    'dist/assets/fonts',
        images:   'dist/assets/images',
        js:       'dist/assets/script',
        favicon:  'dist/favicon',
    },
    files: {
        js: 'script.js',
        jsVendor: 'vendor.js',
        css: 'style.css',
    },
};

gulp.task('clean', function () {
    return gulp.src('dist/*', {read:false})
        .pipe(clean());
});

gulp.task('fonts', function () {
    return gulp.src(src.in.fonts)
        .pipe(gulp.dest(dist.out.fonts))
});

gulp.task('favicon', function() {
    return gulp.src(src.in.favicon)
        .pipe(gulp.dest(dist.out.favicon))
});



/** IMAGES **/
gulp.task('images', argv.mode === MODE_DEBUG ? ['images:copy'] : ['images:min']);

gulp.task('images:copy', function () {
    return gulp.src(src.in.images)
        .pipe(gulp.dest(dist.out.images))
});

gulp.task('images:min', () =>
    gulp.src(src.in.images)
        .pipe(imagemin())
        .pipe(gulp.dest(dist.out.images))
);
/** ------ **/

/** JS **/
gulp.task('js', ['js:scripts', 'js:vendors']);

gulp.task('js:scripts', function () {
    return gulp.src(src.in.js)
        .pipe(gulpif(argv.mode === MODE_DEBUG, sourcemaps.init()))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat(dist.files.js))
        .pipe(gulpif(argv.mode === MODE_RELEASE, uglify()))
        .pipe(gulpif(argv.mode === MODE_DEBUG, sourcemaps.write('.')))
        .pipe(gulp.dest(dist.out.js))
});

gulp.task('js:vendors', function () {
    return gulp.src(src.in.jsVendors)
        .pipe(concat(dist.files.jsVendor))
        .pipe(uglify())
        .pipe(gulp.dest(dist.out.js))
});
/** ------ **/

/** STYLES **/
gulp.task('scss', function () {
    if (argv.css_replace === 'yes' && src.in.css_replace && fs.existsSync(src.in.css_replace)) {
        gutil.log('replace out css to temp css file `/src/css/style_replace.css`');
        return gulp.src(src.in.css_replace)
            .pipe(rename({
                basename: dist.files.css,
                extname: ''
            }))
            .pipe(gulp.dest(dist.out.css))
    }
    else {
        return gulp.src(src.in.scss)
            .pipe(gulpif(argv.mode === MODE_DEBUG, sourcemaps.init({loadMaps: false})))
            .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: ['last 5 versions'],
                cascade:  false
            }))
            .pipe(concat(dist.files.css))
            .pipe(gulpif(argv.mode === MODE_DEBUG, sourcemaps.write()))
            .pipe(gulp.dest(dist.out.css))
            .pipe(browserSync.stream());
    }
});

gulp.task('scss:critical', function () {
    return gulp.src(src.in.critical_style)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade:  false
        }))
        .pipe(gulp.dest(dist.out.css))
});
/** ------ **/

/** TEMPLATES **/
gulp.task('handlebars', function () {
    let options = {
        ignorePartials: true,
        batch : [src.in.hbsPartials],
    };

    return gulp.src(src.in.hbs)
        .pipe(data(function(file) {
            return JSON.parse(fs.readFileSync(src.in.DS));
        }))
        .pipe(handlebars({}, options))
        .pipe(rename({
            extname: ".html"
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});
/** -------- **/


// fonts
// gulp.task('ttf2woff2', function(){
//     gulp.src(['src/fonts/*.ttf'])
//         .pipe(ttf2woff2())
//         .pipe(gulp.dest('src/fonts/'));
// });

gulp.task('build', ['clean'], function() {
    gutil.log('Mode', '\'' + chalk.cyan(argv.mode) + '\'...');
    runSequence([
        'handlebars',
        'js',
        'scss',
        'images',
    ]);
});

gulp.task('watch', ['build', 'browser-sync'], function () {
    gulp.watch('src/scss/**/*.scss', ['scss', 'handlebars', 'js']);
    gulp.watch('src/script/**/*.js', ['js', 'handlebars', 'scss']);
    gulp.watch('src/hbs/**/*.hbs', ['handlebars', 'js', 'scss']);
    gulp.watch(src.in.DS, ['handlebars']);
    gulp.watch('src/scss/**/*.scss', browserSync.reload);
    gulp.watch('src/hbs/**/*.hbs', browserSync.reload);
    gulp.watch('src/script/**/*.js', browserSync.reload);
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('default', ['watch']);