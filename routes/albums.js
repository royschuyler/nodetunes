var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;


router.get('/albums', function (req, res) {
  res.render('templates/albums.ejs');
  // console.log('Yay!!!')
  // console.log(req.name)
  // console.log(res.name)
});


module.exports = router;
