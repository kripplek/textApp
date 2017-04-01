 //Check for config
 var yaml = require('js-yaml'),
     fs   = require('fs');
 // Get document, or throw exception on error
 try {
   var config = yaml.safeLoad(fs.readFileSync('config.yml', 'utf8'));
 } catch (e) {
   console.log('Error loading config \n' +e.message);
 }
 module.exports = config;
