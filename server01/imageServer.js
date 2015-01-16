fs = require('fs');
http = require('http');
url = require('url');
var imgDir = 'E:\\Work2\\Apps\\web-upload2\\images\\';

var server = http.createServer(function(req, res) {
    var request = url.parse(req.url, true);
    var action = request.pathname;

    if (action == '/action.jpg') {
        var img = fs.readFileSync( imgDir + action);
        res.writeHead(200, { 'Content-Type': 'image/jpg' });
        res.end(img, 'binary');
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World \n');
    }
})
server.listen(8081);
console.log("Server is running on port 8081");