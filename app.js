const express = require("express");
const ranking = require("./makeRankingPage");

const app = express();
let imgurl =
  "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202104/17134_103_1.jpg";
app.use(express.static("public"));
app.get("/", function (req, res) {
  res.send("Hello home page");
});
app.get("/movie", function (req, res) {
  res.send("Hello movie <img src = " + imgurl + ">");
});
app.get("/ranking", function (req, res) {
  let HTMLpage;
  ranking.loadPage((page) => {
    HTMLpage = page;
    console.log("Done!");
    res.send(HTMLpage);
  });
});
app.get("/login", function (req, res) {
  res.send("<h1>login please</h1>");
});
app.listen(3000, function () {
  console.log("Connected 3000 port!");
  console.log("http://localhost:3000");
  console.log("http://localhost:3000/index_2.html");
  console.log("http://localhost:3000/ranking");
});
