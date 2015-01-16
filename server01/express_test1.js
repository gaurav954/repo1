
var express = require('express');
var _ = require('underscore');
var mongo = require('mongodb'),
 Server = mongo.Server,
 Db = mongo.Db;

var imgDir = 'E:\\Work2\\Apps\\BB_website\\images\\';
var app = express();

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.get('/',function(req,res){
	console.log('default');
	res.send('from Server');

});

app.get('/getcategory', function(req, res) { 		
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
                    res.send(JSON.stringify(categoryDocs));            
                });
            });
        }
    });    
});


app.listen(8080);
console.log("Server is running on port 8080");