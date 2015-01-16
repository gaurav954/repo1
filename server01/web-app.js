var http = require('http');

var server = http.createServer(function(req, res) {
    res.write('Welcome to http nodejs');
    res.end();
});

server.listen(8080);
console.log('Server is running on port 8080');