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

// get user input as parameter
router.get('/search/:flower', sendFlower2);

function sendFlower2(req, res, next) {
    var data = req.params;
    res.send("I love " + data.flower);
}


module.exports = router;
