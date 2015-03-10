var http = require('http');
var mongo = require('mongodb'),
 Server = mongo.Server,
 Db = mongo.Db;
var url = require('url');
function insertCustomers(){
    var server = new Server('localhost', 27017, { auto_reconnect: true });
    var database = new Db('test', server);
    database.open(function(err, db) {
        if (!err) {
            console.log("connected");
            db.collection('customers', function(err, coll) {
                var customer = [{
                        "name": "Gaurav",
                        "id": 1
                    }, {
                        "name": "Vishal",
                        "id": 2
                    }, {
                        "name": "Vandana",
                        "id": 3
                    }, {
                        "name": "Pihu",
                        "id": 4
                }];

    coll.insert(customers, function(err) {
                    if (err) console.log(err);
                    else
                        console.log('inserted data was success');
                    db.close();
                });
            });
        }
    });
}

function insertCustomerDetails(){
    var Gaurav = {
        "id" : 1,
        "type" : "Saving",
        "balance" : 500,
        "overdraft" : 5000,
        "nominee" : "mahavir",
        "aadharNo" : "sadsas222"
    };
    
    var Vandana = {
        "id" : 3,
        "type" : "nri",
        "balance" : 6000,
        "currency" : "usd",
        "countryName" : "USA",
        "panNo" : "hsdhkhsd"
    };
    
    var Vishal = {
        "id" : 2,
        "type" : "current",
        "balance" : 5000,
        "gauranter" : "hagaga",
        "mobile" : "1234567890",
        "lagerBalance" : "5000"
    };
    
    var Pihu = {
        "id" : 4,
        "type" : "childAccount",
        "balance" : 5000,
        "gaurdian" : "Vishal",
        "relationWithGaurdian" : "daughter",
        "gaurdianNo" : "0123456789"
    };
    var server = new Server('localhost', 27017, { auto_reconnect: true });
    var database = new Db('test', server);
    database.open(function(err, db) {
        if (!err) {
            console.log("connected");
            db.collection('customersDetails', function(err, coll) {
            var customerDetailsColl = [Gaurav, Vishal, Vandana, Pihu];

            coll.insert(customerDetailsColl, function(err) {
                    if (err) console.log(err);
                    else
                        console.log('inserted data was success');
                    db.close();
                });
            });
        }
    });
}

var server = http.createServer(function(req, res) {
    var urlParams = url.parse(req.url, true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.writeHeader(200, { "Content-Type": "text/html" });

    if (urlParams.pathname == "/customers") {
        var server = new Server('localhost', 27017, { auto_reconnect: true });
        var database = new Db('test', server);
        database.open(function(err, db) {
            if (!err) {
                console.log("connected");
                db.collection('customers').find({}).toArray(function(err, docs) {
                    db.close();
                    res.write(JSON.stringify(docs));
                    res.end();
                });
            }
        });
    }

    if (urlParams.pathname == "/customersDetails") {
        var idc = parseInt(urlParams.query.id);
        console.log(urlParams);
        var server = new Server('localhost', 27017, { auto_reconnect: true });
        var database = new Db('test', server);
        database.open(function(err, db) {
            if (!err) {
                console.log("connected");
                db.collection('customersDetails').findOne({"id" : idc}, function(err, doc) {
                    db.close();
                    res.write(JSON.stringify(doc));
                    res.end();
                });
            }
        });
    }
});

server.listen(8080);
console.log("Server is running on port 8080");