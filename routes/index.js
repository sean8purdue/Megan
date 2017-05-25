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

// get multiple user input as parameter
router.get('/search/:flower/:num', sendFlower3);

function sendFlower3(req, res, next) {
    var data = req.params;
    var num = data.num;
    var reply = "";
    for (var i = 0; i < num; i++) {
        reply += "I love " + data.flower + "<br/>";
    }

    res.send(reply);
}

// Self define object
var words = {
    "rainbow": 5,
    "unicorn": 3,
    "doom": -3,
    "gloom": -2
}

router.get('/all', sendAll);

function sendAll(req, res, next) {
    res.send(words);
}

// add user input word to self define object
router.get('/add/:word/:score?', addWord);

function addWord(req, res, next) {
    var data = req.params;
    var word = data.word;
    var score = Number(data.score);
    var reply;

    if (!score) {
        reply = {
            msg: "Score is required"
        }
    } else {
        words[word] = score;
        reply = {
            msg: "Thank you for your word."
        }
    }

    res.send(reply);

}

// search word
router.get('/nsearch/:word/', searchWord);

function searchWord(req, res, next) {
    var data = req.params;
    var word = data.word;
    var reply;

    if (words[word]) {
        words[word] = "100";
        reply = {
            status: "found",
            word: word,
            score: words[word]
        }
    } else {
        reply = {
            status: "not found in words",
            word: word
        }
    }

    res.send(reply);
}


module.exports = router;
