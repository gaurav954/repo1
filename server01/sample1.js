var http = require('http');
var formidable = require('formidable');
var util = require('util');
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

    if (urlParams.pathname == '/form' && req.method.toLowerCase() == 'post') {
        // parse a file upload
        var form = new formidable.IncomingForm();

        form.parse(req, function(err, fields, files) {
            console.log('Received upload:\n\n');
            console.log(fields);
            db.open(function(err, db) {
                if (!err) {
                console.log('connected');
                    db.collection('form', function(err, coll) {
                        coll.insert(fields, function(err) {
                        if (err) console.log(err);
                        else
                        console.log('inserted data was success');
                        db.close();
                        });
                    });
                }
            });
            
            res.end(        
            '<input type="text" name="cat" value=' + fields.cat + '><br>' +
            '<input type="text" name="subCat" value=' + fields.subCat + '><br>' +
            '<input type="text" name="pLine" value=' + fields.pLine + '><br>' +
            '<input type="text" name="product" value=' + fields.product + '>'        
            );
        }); 
        /*

        form
    .on('field', function(field, value) {
        console.log(field, value);
        fields.push([field, value]);
    })
    .on('error', function(err) {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end('error:\n\n' + util.inspect(err));
    })
    .on('file', function(field, file) {
        console.log(field, file);
        //files.push([field, file]);
    })
    .on('aborted', function(err) {
        console.log("user aborted upload");
    })
    .on('end', function() {
        console.log('-> upload done');
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.write('received fields:\n\n ' + util.inspect(fields));
        res.write('\n\n');
        res.end('received files:\n\n ' + util.inspect(files));
    });*/
    }
});

server.listen(8080);
console.log('server is running on port 8080');