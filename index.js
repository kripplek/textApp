// lol
// y tho.jpg

 var express = require('express'),
     app = express(),
     count = 0,
     messages = require('./messages.js'),
     config = require('./config.js'),
     texting = require('./texting.js'),
     async = require('async');



 app.get('/', function (req, res) {
	 var txt =  '<form action="/fact" method="post"><button type="submit"> Send cat fact</button></form> '
	     txt += '<form action="/swanson" method="post"><button type="submit"> Send swanson quote</button></form> '
	     txt += '<br> '+ count+ ' texts sent to '+ config.victim.name
     res.send(txt);
 })
app.post('/fact', function(req,res){
	messages.getCatFact(function(data){
		texting.sendMessage(config.victim.number, data);
		count++;
		res.redirect('/');
	});
});

app.post('/swanson', function(req,res){
	messages.getSwansonQuote(function(data){
		texting.sendMessage(config.victim.number,data );
		count++;
		res.redirect('/');

	});
});
 //handle other routes outside of main
 app.listen(config.http_port);
