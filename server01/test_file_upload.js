var http = require('http');
var formidable = require('formidable');
var url = require('url');
var mongo = require('mongodb');
Server = mongo.Server;
Db = mongo.Db;

var server = new Server('localhost', 27017, { auto_reconnect: true });
var db = new Db('test', server);

var server = new http.createServer(function(req, res) {
    var urlParams = url.parse(req.url, true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.writeHeader(200, { "Content-Type": "text/html" });

    if (urlParams.pathname == '/file' && req.method.toLowerCase() == 'post') {
        var form = new formidable.IncomingForm();

        form.parse(req, function(err, fields, files) {
            console.log("Received upload: \n\n");
            console.log(files);
            db.open(function(err, db) {
                if (!err) {
                    console.log('Connected');
                    db.collection('file', function(err, coll) {
                        coll.insert(files, function(err) {
                            if (err) console.log(err);
                            else
                                console.log('Inserted data was success');
                            db.close();
                        });
                    });
                }
            });
            res.end("<h1>Go back to enter new data</h1>");
        });
    }
});

server.listen(8080);
console.log('server is running on port 8080');