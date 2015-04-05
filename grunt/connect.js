// connect
// Simple webserver with Grunt
module.exports = {
    server: {
        options: {
            port: 9001,
            //base: 'www-root',
            hostname: 'localhost'
        },
        open: {
            server: {
                url: 'http://localhost:<%= connect.options.port %>/index.html'
            }
        }
    }
};