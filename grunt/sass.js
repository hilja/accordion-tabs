// sass
// Grunt-sass with bourbon
module.exports = {
    dist: {
        options: {
            includePaths: require('node-bourbon').includePaths,
            // includePaths: require('node-neat').includePaths,
            outputStyle: 'compressed',
            sourceComments: 'map',
            sourceMap: 'css/style.css.map'
        },
        options: {
            includePaths: require('node-neat').includePaths,
            outputStyle: 'compressed',
            sourceComments: 'map',
            sourceMap: 'css/style.css.map'
        },
        files: {
            'css/style.css': 'scss/style.scss'
        }
    }
};