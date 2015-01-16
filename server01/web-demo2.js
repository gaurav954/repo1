var http = require('http');

var server = http.createServer(function(req, res) {
    console.log(req.headers);

    res.setHeader('AppId', '12345');

    res.write('Welcome to nodejs');
    res.end();
});

server.listen(8087);
console.log('Server is running on port 8087');