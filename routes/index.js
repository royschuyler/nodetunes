var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;

// connect with local mongodb
if (!global.db) {
    mongo.connect('mongodb://localhost:27017/artists', function(err, db) {
    global.db = db;
  });
};

router.get('/home', function (req, res) {
  // res.render('templates/home.ejs');
  collection = global.db.collection('artists')


  // collection.findOne({}, function (err, doc){
  //   if (err) throw err;
  //   console.log(doc)
  // });

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
  console.log(req.body)
  // collection.save(req.body)
  });



// router.get('/artists', function (req, res) {
//   res.render('templates/artists.ejs');

// });

// router.get('/songs', function (req, res) {
//   res.render('templates/songs.ejs')

// });

// router.get('/albums', function (req, res) {
//   res.render('templates/albums.ejs')

// });








module.exports = router;
