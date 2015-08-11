var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;


router.get('/artists', function (req, res) {
  res.render('templates/artists.ejs');
  // console.log('Yay!!!')
  // console.log(req.name)
  // console.log(res.name)
});


module.exports = router;
