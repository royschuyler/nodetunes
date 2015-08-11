var fs = require('fs');
var express = require('express');
var lessCSS = require('less-middleware');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var app = express();



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
