const express = require("express");
const router = express.Router();

router.get("", async (req, res) => {
  var url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=in&" +
    "apiKey=4ea9d05064404a6bad9b4943160686eb";
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.render('news', {get_articals: data.articles})
  } catch (error) {
    console.log(error);
  }
});

router.post("/search", async (req, res) => {
    const search= req.body.search
    console.log(search);
  var url =
    `https://newsapi.org/v2/everything?q=${search}&apiKey=4ea9d05064404a6bad9b4943160686eb`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    // res.json(data);  
    res.render('news', {get_articals: data.articles})
    console.log(data.articles[1]);
  } catch (error) {
    console.log(error);
  }
});



//export:
module.exports = router;
