// concat
module.exports = {
    dist: {
        src: [
            // 'bower_components/zepto/zepto.js',
            //'bower_components/jquery/dist/jquery.js',
            'bower_components/jquery.stellar/src/jquery.stellar.js',
            'bower_components/jquery-waypoints/src/waypoints.js',
            'bower_components/unveil/jquery.unveil.js',
            'js/lib/lazyload.js',
            //'js/_*.js', // All files starting with _
            'js/author.js', // Site specific JS
        ],
        dest: 'js/main.js',
    }
};