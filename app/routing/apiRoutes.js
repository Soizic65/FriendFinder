var express = require('express');
var router = express.Router();
var path = require('path');
var data = require(path.resolve(__dirname, '../data/friends.js'));
var match;

router.get('/api/friends', function (req, res) {
    res.json(data);
});

router.post('/api/friends', function (req, res) {
    scoreLoop(req);
    var userInput = req.body;
    userInput.scores = userInput.scores.map(parseInt);
    console.log(userInput);
    data.push(userInput);
    res.json(match);
});

module.exports = router


function scoreLoop(req) {

    var finalDifferences = []

    for (var i = 0; i < data.length; i++) {
        var difference = findDifference(req.body.scores, data[i].scores)
        var total = difference.reduce(add, 0);
        finalDifferences.push(total);
    }
    lowest(finalDifferences);
};

function findDifference(one, two) {
    var result = [],
        longer = one.length >= two.length ? one.length : two.length;
    for (i = 0; i < longer; i++) {
        if (one[i] !== two[i]) {
            if (one[i] > two[i]) {
                result.push(one[i] - two[i]);
            } else {
                result.push(two[i] - one[i]);
            }
        }
    }
    return result;
};

function add(a, b) {
    return a + b;
};


function lowest(input) {
    var lowestDiff = Math.min(...input);
    var oneMatch = input.indexOf(lowestDiff);
    match = returnMatch(data[oneMatch])
};

function returnMatch(match) {
    return match;
};