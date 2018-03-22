// ________________________________________
// Dependencies
var path = require("path");

// ________________________________________
// Load friends list
var friendsList = require('../data/friend.js');

// ________________________________________
//
module.exports = function(app) {
    // GET route - displays JSON of the array of friends in friends.js
    app.get('/api/friends', function(req, res) {
        res.json(friendsList);
    });
    // POST route - handles incoming survey results and compatibility logic
    app.post('/api/friends', function(req, res) {

        var newScores = req.body.scores;
        var scoresArr = [];
        var friendCount = 0;
        var bestFriendMatch = 0;

        // Loop through current friends list
        for (var i = 0; i < friendsList.length; i++) {
            var diffInScores = 0;
            // Loop through scores and compare to friends list
            for (var ii = 0; ii < newScores.length; ii++) {
                diffInScores += (Math.abs(parseInt(friendsList[i].scores[ii]) - parseInt(newScores[ii])));
            }

            // Push results from above into the scoresArr
            scoresArr.push(diffInScores);
        }

        // Loop through the scoresArr and find the best match 
        for (var i = 0; i < scoresArr.length; i++) {
            if(scoresArr[i] <= scoresArr[bestFriendMatch]) {
                bestFriendMatch = i;
            }
        }

        // Return JSON data
        var newFriend = friendsList[bestFriendMatch];
        res.json(newFriend);

        // Push the new friend into the friendsList array
        friendsList.push(req.body);
    });
};
