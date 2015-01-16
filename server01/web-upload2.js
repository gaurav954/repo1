var http = require('http');
var qs = require('qs');
var url = require('url');
var _ = require('underscore');
fs = require('fs');
var mongo = require('mongodb'),
 Server = mongo.Server,
 Db = mongo.Db;



var imgDir = 'E:\\Work2\\Apps\\BB_website\\images\\';
var nodeserver = http.createServer(function(req, res) {
    var urlParams = url.parse(req.url, true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.writeHeader(200, { "Content-Type": "text/html" });



    if (urlParams.pathname == "/getcategory") {
        console.log(urlParams.pathname);
        var db = new Db('Website', new Server('localhost', 27017, { auto_reconnect: true }));
        db.open(function(err, db) {
            if (!err) {
                console.log("connected");
                db.collection('category').find({}).toArray(function(err, categoryDocs) {
                    db.collection('sub-category').find({}).toArray(function(err, subCateogryDocs) {
                        db.close();
                        for (i = 0; i < categoryDocs.length; i++) {
                            var category = categoryDocs[i].CATEGORY;
                            var subCategories = _.filter(subCateogryDocs, function(subcat) { return subcat.PARENT_CATEGORY === category; });
                            categoryDocs[i].subCategories = subCategories;
                        }
                        res.end(JSON.stringify(categoryDocs));
                    });
                });
            }
        });
    }

    //    if (urlParams.pathname == "/getsubcategory") {
    //        console.log(urlParams.pathname);
    //        var db = new Db('Website', new Server('localhost', 27017, { auto_reconnect: true }));
    //        db.open(function(err, db) {
    //            if (!err) {
    //                console.log("connected");
    //                db.collection('sub-category').find({}).toArray(function(err, docs) {
    //                    db.close();
    //                    res.end(JSON.stringify(docs));
    //                });
    //            }
    //        });
    //    }

    if (urlParams.pathname == "/getpline") {
        var idc = urlParams.query.PARENT_SCATEGORY;
        console.log(idc);
        var server = new Server('localhost', 27017, { auto_reconnect: true });
        var database = new Db('Website', server);
        database.open(function(err, db) {
            if (!err) {
                console.log("connected");
                db.collection('product_line').find({}).toArray(function(err, docs) {
                    db.close();                                       
                    var pLine = _.filter(docs, function(pL) { return pL.PARENT_SCATEGORY === idc; }); 
                    console.log(pLine);
                    res.end(JSON.stringify(pLine));
                });
            }
        });
    }

    if (urlParams.pathname == "/getproduct") {
        var idc = urlParams.query.PARENT_PLINE;
        console.log(idc);
        var db = new Db('Website', new Server('localhost', 27017, { auto_reconnect: true }));
        db.open(function(err, db) {
            if (!err) {
                console.log("connected");
                db.collection('product').find({}).toArray(function(err, docs) {
                    var product = _.filter(docs, function(pL) { return pL.PARENT_PLINE === idc; });
                    console.log(JSON.stringify(product));
                    res.end(JSON.stringify(product));
                });
            }
        });
        return;
    }

    if (urlParams.pathname == "/cart") {
        if (req.method == 'POST') {
            var str = '';
            req.on('data', function(data) {
                str += data;

                console.log(str);
                res.end(JSON.parse(data));
            });
        }
    }



    console.log("default");

    var action = urlParams.pathname;
    console.log(action);
    var a = action.lastIndexOf("/");
    var actionNew = action.slice(a + 1);
    var res1 = action.match(/.jpg/gi);
    var res2 = action.match(/.jpeg/gi);
    console.log(actionNew);
    if (res2 || res1) {
        console.log(imgDir + actionNew);
        var img = fs.readFileSync(imgDir + actionNew);
        res.end(img, 'binary');
    }
});

nodeserver.listen(8080);
console.log("Server is running on port 8080");
