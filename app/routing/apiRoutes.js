



module.exports = (app) => {
  const friendsArr = require("../data/friends");

  const express = require("express");
  //const app = express();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.get("/api/friend", (req, res) => {
    return res.json(friendsArr);
    //res.send("display a JSON of all possible friends");
  });

  app.post("/api/friend", (req, res) => {
    //console.log(req.body);
    friendsArr.push(req.body);
    console.log(friendsArr);
    res.json(true);


  });
};