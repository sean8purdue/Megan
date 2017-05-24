var express = require('express');
var router = express.Router();
var videodata = require('../videodata.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express' ,
      sec: 'secP' ,
      videodata: videodata
  });
});

// communicate with user: input and output
router.get('/flower', sendFlower);

function sendFlower(req, res, next) {
    res.send("I love flowers");

}

module.exports = router;
