// watch
// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
    options: {
        livereload: {
            files: ['scss/**/*.scss', '*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css', 'images/**/*.{png,jpg,jpeg,gif,webp,svg}'],
            options: {
                livereload: true,
            }
        },
    },
    scripts: {
        files: ['js/*.js'],
        tasks: [
            'jshint',
            'concat',
            'uglify'
        ],
        options: {
            spawn: false,
        }
    },
    css: {
        files: ['scss/**/*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
            spawn: false,
        }
    },
    html: {
        files: ['./**/*.html'],
        tasks: [],
        options: {
            spawn: false
        }
    }
};