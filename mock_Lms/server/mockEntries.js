var http = require('http');
var qs = require('qs');
var _ = require('underscore');
fs = require('fs');
var mongo = require('mongodb');
Server = mongo.Server;
Db = mongo.Db;
var url = require('url');
function insertEntries() {
    var server = new Server('localhost', 27017, { auto_reconnect: true });
    var database = new Db('logins', server);
    database.open(function(err, db) {
        if (!err) {
            console.log("connected");
            db.collection('loginIds', function(err, coll) {
                var employeeLogin = [{
                    'userId': 'Gaurav',
                    'password': 'gaurav'
                }, {
                    'userId': 'Vishal',
                    'password': 'vishal'
                }, {
                    'userId': 'Vandana',
                    'password': 'vandana'
                }, {
                    'userId': 'Jahnvi',
                    'password': 'jahnvi'
                }, {
                    'userId': 'Yogesh',
                    'password': 'yogesh'
                }, {
                    'userId': 'Nishit',
                    'password': 'nishit'
}];
coll.insert(employeeLogin, function(err) {
                        if (err) console.log(err);
                        else console.log('inserted data was success');
                        db.close();
                        res.end("Data submitted");
                    });
                });
            }
        });
    }

    var server = new Server('localhost', 27017, { auto_reconnect: true }, { safe: false });
    var database = new Db('logins', server);
    var nodeserver = http.createServer(function(req, res) {
        var urlParams = url.parse(req.url, true);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.writeHeader(200, { "Content-Type": "text/html" });

        if (urlParams.pathname == "/login") {
            console.log(urlParams.query);
            var queryObj = qs.parse(urlParams.query);
            console.log("hello" + queryObj);
            var info = JSON.parse(queryObj.jsonData);
            console.log("hello" + info);
            console.log(info.username);
            console.log(info.password);
            database.open(function(err, db) {
                if (!err) {
                    console.log('Connected');
                    db.collection('loginIds').find({}).toArray(function(err, docs) {
                        db.close();
                        var u = _.filter(docs, function(uName) { return uName.userId === info.username; });
                        console.log(u);
                        if (u.length !== 0) {
                            console.log("test1 pass");
                            for (i = 0; i <= u.length; i++) {
                                console.log(u[i].password + '=' + info.password);
                                if (u[i].password === info.password) {
                                    console.log("test2 pass");
                                    res.end(JSON.stringify(u[i]));
                                    console.log(JSON.stringify(u[i]));
                                    return;
                                } else {
                                    res.end("Mismatch");
                                    console.log("Incorrect Username or Password");
                                    return;
                                }
                            }
                        }
                        else {
                            res.end("Mismatch");
                            console.log("Incorrect Username or Password");
                        }
                    });
                }
            });
        }

        if (urlParams.pathname == "/myleave") {
            var idc = urlParams.query.user;
            console.log(idc);           
            database.open(function(err, db) {
                if (!err) {
                    console.log("connected");
                    db.collection('userData').find({}).toArray(function(err, docs) {
                        db.close();
                        var userInfo = _.find(docs, function(info) { return info.name === idc; });
                        console.log(userInfo);
                        res.end(JSON.stringify(userInfo));
                    });
                }
            });
        }
    });
    nodeserver.listen(8080);
    console.log("Server is running on port 8080");