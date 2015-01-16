var http = require('http');

var server = http.createServer();

server.listen(8080);
console.log("Server running at port 8080");

server.on('request', handleRequest);

function handleRequest(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.writeHead(200, { "Content-Type": "text/html" });
    var object = {
        id : 111,
        type: 'tshirt',
        price: 550
    };
    if (req.method == 'POST') {
        var body = '';
        request.on('data', function(data) {
            body += data;

            // Too much POST data, kill the connection!
            if (body.length > 1e6)
                request.connection.destroy();
        });
        request.on('end', function() {
            var post = qs.parse(body);

            // use post['blah'], etc.
        });
    }
    res.end(JSON.stringify(object));
}

