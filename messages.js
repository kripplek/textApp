var http = require('http');
function getApiData(host, path, cb){
	     http.get({
		host: host,
		path: path
	    }, function(response) {
		// Continuously update stream with data
		var body = '';
		response.on('data', function(d) {
		    body += d;
		});
		response.on('end', function() {

		    // Data reception is done, do whatever with it!
		    var parsed = JSON.parse(body);
			return cb(parsed)
		});
	    });
}

module.exports.getCatFact = function(cb){
       getApiData( 'catfacts-api.appspot.com','/api/facts?number=1', function(data){
	    return cb(data.facts[0]);
       });
}
module.exports.getSwansonQuote= function(cb){
       getApiData('ron-swanson-quotes.herokuapp.com','/v2/quotes', function(data){
       		return cb( "'" +data +"' -Ron Swanson");
       });
}

