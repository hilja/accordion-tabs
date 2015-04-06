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
    grunt: {
        files: [
            'Gruntfile.js',
            'grunt/*.js'
        ]
    },
    html: {
        files: ['*.html', '*/**/*.html'],
        options: {
            spawn: false
        }
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
    }
};