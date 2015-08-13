var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var app = express();


// CONNECTS WITH LOCAL MONGO DB
if (!global.db) {
    mongo.connect('mongodb://localhost:27017/artists', function(err, db) {
    global.db = db;
  });
};

//-------------------------------------------------------------------------

//DISPLAYS ARTISTS FROM MONGO DB
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

//POSTS NEW ARTISTS FROM FORM TO MONGO DB
router.post('/home', function(req, res) {
  var collection = global.db.collection('artists')
  collection.save(req.body)
  res.redirect('/artists')
  });


//-----------------------------------------------------------------------

//POSTS ARTISTS FROM MONGO DB (without a form attached)
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

//DELETES ARITISTS FROM MONGO DB
router.post('/artists/:id', function(req, res) {
  var collection = global.db.collection('artists')
  console.log(ObjectID(req.params.id))
  collection.remove({_id: ObjectID(req.params.id)})
    res.redirect('/artists')
  });









module.exports = router;
