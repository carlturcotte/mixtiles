var http      = require('http');
var mongoose  = require('mongoose');
var express   = require('express');

var app    = express();
var standardGreeting = 'Hello World!';

app.get('/', function(req, res){
        res.send(standardGreeting);
});

app.use(function(err, req, res, next){
    if (req.xhr) {
        res.send(500, 'Something went wrong!');
    }
    else {
        next(err);
    }
});

console.log('starting the Express (NodeJS) Web server');
app.listen(8080);
console.log('Webserver is listening on port 8080');