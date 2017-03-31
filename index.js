// lol
// y tho.jpg

var express = require('express'),
    app = express(),
    cors = require('cors'),
    messager = require('./lib/messages.js'),
    twilio = require('twilio'),
    accountSid = "AC44e673d1495566699e5fc45fde5359f9",
    authToken = "c03e1c09427ca8fd7f731b63895fabcb",
    client = new twilio.RestClient(accountSid, authToken);

app.get('/', function (req, res) {
    res.send('<form action="/lol"><button type="submit"> Cat facts!!!</button></form>');
})

app.post('/lol', function (req,res){

exports.send= function(to,msg, cb){
    client.messages.create({
        body: msg,
        to: to,  // Text this number
        from: config.twilio.fromNumber  // From a valid Twilio number
    }, function(err, message) {
        if(err) {
            return cb(err,message);
        }
        return cb(null,message);
    });
}
     
    res.location('/');
}
//handle other routes outside of main
app.listen(4545);
