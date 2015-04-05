// autoprefixer
// https://github.com/nDmitry/grunt-autoprefixer
module.exports = {
    options: {
        browsers: ['last 2 version']
    },
    single_file: {
        options: {
            map: true
        },
        src: 'css/style.css',
        dest: 'css/style.css'
    },
};