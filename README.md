#Texting app
sends catfacts and swanson quotes to a specified number

## annoying friends
sends catfacts and swanson quotes to pre configured people 

### Requirements:
You need a twilio account ( with money) ... shit aint free yo!

## Install
- clone
- `cp config.sample.yml config.yml`
- fill in your actual account info
- `npm install`
- `node index.js`


## Using pm2
- `sudo npm install -g pm2`
- `pm2 start pm2.json`

> you can optionally persist the pm2 process through sartup if you look at the [Documentation](http://pm2.keymetrics.io/docs/usage/startup/)
