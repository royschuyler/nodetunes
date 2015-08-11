var fs = require('fs');
var express = require('express');
var lessCSS = require('less-middleware');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var app = express();
var mongo = require('mongodb').MongoClient;

if (!global.db) {
    mongo.connect('mongodb://localhost:27017/artists', function(err, db) {
    global.db = db;
  });
};

app.use(bodyParser.urlencoded({extended: true}));





var artists = require('./routes/artists');
var albums = require('./routes/albums');
var songs = require('./routes/songs');

// require('./lib/mongodb');

app.use('/', routes);
app.use('/home', routes);
app.use('/world', routes);
app.use('/artists', routes);
app.use('/albums', routes);
app.use('/songs', routes);



var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%d', host, port);
});
