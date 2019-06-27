app.get("/api/friends/:friends", (req, res) => {
    const chosen = req.params.friends;
  
    console.log(chosen);
  
    for (let i = 0; i < friends.length; i++) {
      if (chosen === friends[i].routeName) {
        return res.json(friends[i]);
      }
    }
  
    return res.json(false);
  });