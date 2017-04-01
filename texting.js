var  twilio = require('twilio'),
     http = require('http'),
     config = require('./config.js');
     client = new twilio.RestClient(config.twilio.AccountSid, config.twilio.AuthToken);

module.exports.sendMessage = function(to, msg){
console.log(msg);
     client.messages.create({
	 body: msg,
	 to: to,  // Text this number
	 from: config.twilio.fromNumber  // From a valid Twilio number
     }, function(err, msg) {
	    if (err) console.log(err)
	    if (msg) console.log(msg)
	    console.log("message succes");
     });

}
