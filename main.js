var apiai = require('apiai');
 
var app = apiai("<c33b5200ec5c46cea04889c701c80530>");
 
var request = app.textRequest('< >');
 
request.on('response', function(response) {
    console.log(response);
});
 
request.on('error', function(error) {
    console.log(error);
});
 
request.end()
