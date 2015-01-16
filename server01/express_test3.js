var express = require('express'); 
var app = express(); 

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	// res.writeHeader(200, { "Content-Type": "text/html" });
	next();
});

app.get('/', function(req, res){ 
res.send('Hello World Expressjs'); 
}); 
app.listen(8084); 
console.log('Server is running on port 8084');