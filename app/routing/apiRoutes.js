module.exports = (app) => {
  const friendsArr = require("../data/friends");
  const express = require("express");

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.get("/api/friend", (req, res) => {
    return res.json(friendsArr);
  });

  app.post("/api/friend", (req, res) => {
    var newIntArr = [];
    var compatArr = [];
    for (var i = 0; i < req.body.scores.length; i++) {
      newIntArr.push(parseInt(req.body.scores[i]));
    }
    req.body.compatibilityRating = 0;
    req.body.scores = newIntArr;

    for (var i = 0; i < friendsArr.length; i++) {
      friendsArr[i].compatibilityRating = totalDiff(req.body.scores, friendsArr[i].scores);
      var compatScore = totalDiff(req.body.scores, friendsArr[i].scores);
      compatArr.push(compatScore);
    }
    
    var mostCompatRating = Math.min(...compatArr);
   
    var bestFriendInfoArr = [];
    for (var i = 0; i < friendsArr.length; i++) {
      if (friendsArr[i].compatibilityRating === mostCompatRating) {
        bestFriendInfoArr.push(friendsArr[i].name);
        bestFriendInfoArr.push(friendsArr[i].photo);
      }
    }
    friendsArr.push(req.body);

    res.json(bestFriendInfoArr);
  });

  function totalDiff(arr1, arr2) {
    var sumDiff = 0;
    for (var i = 0; i < 10; i++) {
      sumDiff += Math.abs(arr1[i] - arr2[i]);
    }
    return sumDiff;
  }
};