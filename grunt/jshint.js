// jshin
// https://github.com/gruntjs/grunt-contrib-jshint
module.exports = {
    options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
    },
    all: [
        'Gruntfile.js',
        'js/src/{,*/}*.js',
        '!js/vendor/*'
    ]
};