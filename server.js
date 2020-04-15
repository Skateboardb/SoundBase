//importing node framework
var express = require('express');

var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function(req, res) {
	res.send('HELLO FROM DOCKER!');
});
//listen to port 3000 by default
console.log(process.env.PORT);

app.listen(process.env.PORT || 3000);

module.exports = app;
