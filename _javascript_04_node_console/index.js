#!/usr/bin/nodejs


// -------------- load packages -------------- //
// INITIALIZATION STUFF

var express = require('express')
var app = express();

console.log('SYSTEM STARTING UP...')


// -------------- express initialization -------------- //
// PORT SETUP - NUMBER SPECIFIC TO THIS SYSTEM
app.set('port', process.env.PORT || 8080 );

console.log('REGISTERING GET HANDLERS...')


// -------------- express 'get' handlers -------------- //
// These 'getters' are what fetch your pages

app.get('/', function(req, res){
    res.send('hola');
});

app.get('/foo', function(req, res){
    res.send('requested foo');
});

app.get('/not_a_search', function(req, res){
    var theQuery = req.query.q;
    res.send('query q parameter:' + theQuery);
    
    // log the parameter
    console.log(theQuery);
});

console.log('CREATING LISTENTER...')


// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});