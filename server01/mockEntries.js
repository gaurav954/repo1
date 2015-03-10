var http = require('http');
var mongo = require('mongodb');
Server = mongo.Server;
Db = mongo.Db;
var url = require('url');
function insertEntries() {
    var server = new Server('localhost', 27017, { auto_reconnect: true });
    var database = new Db('test', server);
    database.open(function(err, db) {
        if (!err) {
            console.log("connected");
            db.collection('loginIds', function(err, coll) {
                var employeeLogin = [{
                    'userId': 'aaaaa',
                    'password': 'aaaaa'
                }, {
                    'userId': 'bbbbb',
                    'password': 'bbbbb'
                }, {
                    'userId': 'ccccc',
                    'password': 'ccccc'
                }, {
                    'userId': 'ddddd',
                    'password': 'ddddd'
                }, {
                    'userId': 'eeeee',
                    'password': 'eeeee'
                }, {
                    'userId': 'fffff',
                    'password': 'fffff'
                }];
                    coll.insert(loginIds, function(err) {
                        if (err) console.log(err);
                        else console.log('inserted data was success');
                        db.close();
                    });
                });
            }
        });
    }
    server.listen(8080);
    console.log("Server is running on port 8080");