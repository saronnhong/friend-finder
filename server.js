const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
  });
  
app.get("/", (req, res) => {
    
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
  });


app.listen(PORT, () => {
    console.log("Listening at http://localhost:" + PORT)
  });