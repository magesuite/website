const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
var $ = require('gulp-load-plugins')();
var googleWebFonts = require('gulp-google-webfonts');

var options = { };

gulp.task('fonts', function () {
	return gulp.src('./fonts.list')
		.pipe(googleWebFonts(options))
		.pipe(gulp.dest('static/fonts'))
		;
	});

gulp.task('optimize-g-pics', () =>
    gulp.src('static-full/pictures/g*')
        .pipe(imagemin([            
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
        ]))
        .pipe(gulp.dest('static/pictures'))
);

gulp.task('generate-g-webp', () =>
    gulp.src('static-full/pictures/*.{jpg,png}')
    .pipe($.responsive({
        'g-*': [
            {
                width: 480,
                rename: {
                    suffix: '-small',
                    extname: '.webp',
                },
                quality: 80
            }, 
            {
                width: 480 * 2,
                rename: {
                    suffix: '-large',
                    extname: '.webp',
                },
                quality: 80
            }, 
        ],
    }, {
        // Use progressive (interlace) scan for JPEG and PNG output
        progressive: true,
        // Strip all metadata
        withMetadata: false,
        errorOnEnlargement: false,
        skipOnEnlargement: false,
        progressive: true,
        errorOnUnusedConfig: false,
        withoutEnlargement: true,
        errorOnUnusedImage: false
        
    }))
    .pipe(gulp.dest('static/pictures'))
);

gulp.task('g', ['optimize-g-pics', 'generate-g-webp']);


gulp.task('resize-pictures', () => {
  return gulp.src('static-full/pictures/*.{jpg,png}')
    .pipe($.responsive({

        'f-*.jpg': [
            {
                width: 480,
                rename: {
                    suffix: '-small',
                    extname: '.jpg',
                },
                quality: 80
            }, 
            {
                width: 480 * 2,
                rename: {
                    suffix: '-small@2x',
                    extname: '.jpg',
                },
                quality: 60
            }, 
            {
                width: 1280,
                rename: {
                    suffix: '-large',
                    extname: '.jpg',
                },
                quality: 80
            }, 
            {
                width: 1280 * 2,
                rename: {
                    suffix: '-large@2x',
                    extname: '.jpg',
                },
                quality: 60
            }, 
            {
                width: 480,
                rename: {
                    suffix: '-small',
                    extname: '.webp',
                },
            }, 
            {
                width: 480 * 2,
                rename: {
                    suffix: '-small@2x',
                    extname: '.webp',
                },
            }, 
            {
                width: 1280,
                rename: {
                    suffix: '-large',
                    extname: '.webp',
                },
            }, 
            {
                width: 1280 * 2,
                rename: {
                    suffix: '-large@2x',
                    extname: '.webp',
                },
            }
        ],

        'p-*.jpg': [
            {
                width: 480,
                rename: {
                    suffix: '-small',
                    extname: '.jpg',
                },
                quality: 80
            }, 
            {
                width: 480 * 2,
                rename: {
                    suffix: '-small@2x',
                    extname: '.jpg',
                },
                quality: 60
            }, 
            {
                width: 900,
                rename: {
                    suffix: '-large',
                    extname: '.jpg',
                },
                quality: 80
            }, 
            {
                width: 900 * 2,
                rename: {
                    suffix: '-large@2x',
                    extname: '.jpg',
                },
                quality: 60
            }, 
            {
                width: 480,
                rename: {
                    suffix: '-small',
                    extname: '.webp',
                },
            }, 
            {
                width: 480 * 2,
                rename: {
                    suffix: '-small@2x',
                    extname: '.webp',
                },
            }, 
            {
                width: 900,
                rename: {
                    suffix: '-large',
                    extname: '.webp',
                },
            }, 
            {
                width: 900 * 2,
                rename: {
                    suffix: '-large@2x',
                    extname: '.webp',
                },
            }
        ],
        'p-*.png': [
            {
                width: 480,
                rename: {
                    suffix: '-small',
                    extname: '.png',
                },
            }, 
            {
                width: 480 * 2,
                rename: {
                    suffix: '-small@2x',
                    extname: '.png',
                },
            }, 
            {
                width: 900,
                rename: {
                    suffix: '-large',
                    extname: '.png',
                },
            }, 
            {
                width: 900*2,
                rename: {
                    suffix: '-large@2x',
                    extname: '.png',
                },
            }, 
            {
                width: 480,
                rename: {
                    suffix: '-small',
                    extname: '.webp',
                },
            }, 
            {
                width: 480 * 2,
                rename: {
                    suffix: '-small@2x',
                    extname: '.webp',
                },
            }, 
            {
                width: 900,
                rename: {
                    suffix: '-large',
                    extname: '.webp',
                },
            }, 
            {
                width: 900 * 2,
                rename: {
                    suffix: '-large@2x',
                    extname: '.webp',
                },
            }
        ],
    }, {
        // Global configuration for all images
        // The output quality for JPEG, WebP and TIFF output formats
        quality: 70,
        // Use progressive (interlace) scan for JPEG and PNG output
        progressive: false,
        // Strip all metadata
        withMetadata: false,
        errorOnEnlargement: false,
        skipOnEnlargement: false,
        progressive: true,
        errorOnUnusedConfig: false,
        withoutEnlargement: true,
        errorOnUnusedImage: false
        
    }))
    .pipe(imagemin([                    
                     imagemin.optipng({optimizationLevel: 5}),
                 ]))
    .pipe(gulp.dest('static/pictures'));
});


  gulp.task('resize', ['resize-pictures']);

  gulp.task('images', () => {
    return gulp
    .src('static-full/images/**')
    .pipe(imagemin({}))
    .pipe(gulp.dest('static/images/'));
  })

