const express = require("express");
const ranking = require("./makeRankingPage");

const app = express();

app.use(express.static("public"));
app.get("/", function (req, res) {
  res.send("Home page");
});

app.get("/ranking", function (req, res) {
  let HTMLpage;
  let num = req.query.theather;
  if (0 <= num && num < 5) {
    ranking.loadPage(num, (page) => {
      console.log("theather Number:" + num);
      HTMLpage = page;
      console.log("Done!");
      res.send(HTMLpage);
    });
  } else {
    res.send("Wrong Url!");
  }
});

app.listen(3000, function () {
  console.log("Connected 3000 port!");
  console.log("http://localhost:3000/main_interface.html");
  console.log("http://localhost:3000/ranking?theather=0");
});
