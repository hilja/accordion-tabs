// watch
// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
    sass: {
        files: [
            'scss/**/*.scss',
            'scss/*.scss'
        ],
        tasks: ['sass:dist', 'autoprefixer'],
        options: {
           //spawn: false,
        }
    },
    css: {
        files: ['*.css', 'css/**/*.css'],
    },
    bower: {
        files: ['bower.json'],
        tasks: ['bower']
    },
    grunt: {
        files: [
            'Gruntfile.js',
            'grunt/*.js'
        ]
    },
    scripts: {
        files: ['js/{,*/}*.js'],
        tasks: [
            // 'jshint',
            'concat',
            'uglify'
        ],
        options: {
            spawn: false,
        }
    },
    html: {
        files: ['*.php', '*/**/*.php'],
        options: {
            spawn: false
        }
    },
    svg : {
        files: ['images/svg/src/*.svg'],
        tasks: ['newer:svgmin', 'newer:svg2png']
    },
    livereload: {
        options: {
            livereload: true
        },
        files: [
            '{,*/}*.css',
            '{,*/}*.html',
            '{,*/}*.php',
            'js/{,*/}*.js',
            'images/{,*/}*'
        ]
    },


    // options: {
    //     livereload: {
    //         files: ['scss/**/*.scss', '*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css', 'images/**/*.{png,jpg,jpeg,gif,webp,svg}'],
    //         options: {
    //             livereload: true,
    //         }
    //     },
    // },
    // scripts: {
    //     files: ['js/*.js'],
    //     tasks: [
    //         'jshint',
    //         'concat',
    //         'uglify'
    //     ],
    //     options: {
    //         spawn: false,
    //     }
    // },
    // css: {
    //     files: ['scss/**/*.scss'],
    //     tasks: ['sass', 'autoprefixer'],
    //     options: {
    //         spawn: false,
    //     }
    // },
    // html: {
    //     files: ['./**/*.html'],
    //     tasks: [],
    //     options: {
    //         spawn: false
    //     }
    // }
};