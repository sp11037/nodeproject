var express = require('express');   // references the express package
var app = express();    // creates express instance

var port = 5000; // for cloud9 IDE: process.env.PORT;

app.get('/', function(req, res) {
    res.send('Aloha World!');
});

app.get('/routing', function(req, res) {
    res.send('Aloha Routing!');
});

app.listen(port, function(err) {
    console.log(`The server is running on port: http://localhost:` + port);
});