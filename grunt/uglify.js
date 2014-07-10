// uglify
module.exports = {
    build: {
        options: {
            sourceMap: true,
        },
        files: {
            'js/build/global.min.js': ['js/build/global.js'],
            'lib/jquery/jquery.min.js': ['lib/jquery/jquery.js'],
        },
    }
};