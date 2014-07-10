// concat
module.exports = {
    dist: {
        src: [
            'js/src/_*.js', // All files starting with _
            //'lib/some-plugins.js',
            'js/src/author.js', // Site specific JS
        ],
        dest: 'js/build/global.js',
    },
    // anotherdDist: {
    //     src: [
    //         'lib/js/yepnope/yepnope.js',
    //         'js/src/yepnope-prefix-*.js',
    //     ],
    //     dest: 'lib/js/yepnope/yepnope+prefixes.js',
    // }
};
