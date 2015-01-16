var http = require('http');
var qs = require('qs');
var url = require('url');
var mongo = require('mongodb'),
 Server = mongo.Server,
 Db = mongo.Db;

var server = new Server('localhost', 27017, { auto_reconnect: true });
var db = new Db('test', server);

var server = http.createServer(function(req, res) {
    var urlParams = url.parse(req.url, true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.writeHeader(200, { "Content-Type": "text/html" });
    if (urlParams.pathname == "/getemployee") {
        db.open(function(err, db) {
            if (!err) {
                console.log("connected");
                db.collection('employee').find({}).toArray(function(err, docs) {
                    db.close();
                    res.write(JSON.stringify(docs));
                    res.end();
                });
            }
        });
    }
    else
        if (urlParams.pathname == "/removeemployee") {
        db.open(function(err, db) {
            if (!err) {
                console.log("connected");
                db.collection('employee', function(err, coll) {
                    coll.remove({"email":"gaurav954@gmail.com"},function(err){
                        db.close();
                        console.log("data removed from server");
                    });
                });               
            }
        });
    }
    else {
        if (req.method == 'POST') {
            var body = '';
            req.on('data', function(data) {
                body += data;
                console.log(data);
                // Too much POST data, kill the connection!
                if (body.length > 1e6)
                    request.connection.destroy();
            });
            req.on('end', function() {
                db.open(function(err, db) {
                    if (!err) {
                        console.log("connected");
                        var employee = qs.parse(body);

                        db.collection('employee', function(err, coll) {
                            coll.insert(employee, function(err) {
                                if (err) console.log(err);
                                else
                                    console.log('inserted data was success');
                                db.close();
                            });
                        });
                    }
                });

            });
        }
        res.write('Welcome to http nodejs xxxxx');
        res.end();
    }
});

server.listen(8080);
console.log("Server is running on port 8080");
