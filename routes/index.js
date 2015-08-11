var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('Hello World!');
});

router.get('/home', function (req, res) {
  res.render('templates/home.ejs');
  // console.log('Yay!!!')
  // console.log(req.name)
  // console.log(res.name)

});

router.get('/artists', function (req, res) {
  res.render('templates/artists.ejs');
  // console.log('Yay!!!')
  // console.log(req.name)
  // console.log(res.name)
});

router.get('/songs', function (req, res) {
  res.render('templates/songs.ejs')
  // console.log(req.name)
  // console.log(res.name)
});

router.get('/albums', function (req, res) {
  res.render('templates/albums.ejs')
  // console.log(req.name)
  // console.log(res.name)
});








module.exports = router;
