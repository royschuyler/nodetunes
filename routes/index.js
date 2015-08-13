var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var app = express();


// connect with local mongodb
if (!global.db) {
    mongo.connect('mongodb://localhost:27017/artists', function(err, db) {
    global.db = db;
  });
};

router.get('/home', function (req, res) {
  // res.render('templates/home.ejs');
  var collection = global.db.collection('artists')

  collection.find().toArray(function(err, artists) {
    formattedArtists = artists.map(function(artist) {
      return {
        _id: artist._id,
        name: artist.name,
        genre: artist.genre,
        bio: artist.bio
      };
    });
    res.render('templates/home.ejs', {artists: formattedArtists});
  });
});

router.post('/home', function(req, res) {
  var collection = global.db.collection('artists')
  console.log(req.body)
  console.log(res.body)
  collection.save(req.body)
  res.redirect('/artists')
  });

router.get('/artists', function (req, res) {
  var collection = global.db.collection('artists')
  collection.find().toArray(function(err, artists) {
    formattedArtists = artists.map(function(artist) {
      return {
        _id: artist._id,
        name: artist.name,
        genre: artist.genre,
        bio: artist.bio
      };
    });
    res.render('templates/artists.ejs', {artists: formattedArtists});
  });
});














module.exports = router;
