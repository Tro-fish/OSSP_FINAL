const express = require("express");
const ranking = require("./makeRankingPage");

const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.use(express.static("public"));
app.get("/", function (req, res) {
  res.send("Home page");
});

app.get("/ranking", function (req, res) {
  let HTMLpage;
  let num = req.query.theather;
  if (0 <= num && num < 5) {
    ranking.loadPage(num, page => {
      HTMLpage = page;
      res.send(HTMLpage);
    });
  } else {
    res.send("Wrong Url!");
  }
});

app.listen(port, function () {
  console.log(`http://localhost:${port}`);
});
