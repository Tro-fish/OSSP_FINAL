module.exports = { searchMetacritic };

function searchMetacritic(movieList, callback) {
  setTimeout(() => {
    for (let i = 0; i < movieList.length; i++) {
      let title = movieList[i].title;
      let year = new Array();
      let etitle = new String();
      title = title.replace(/-/g, ":");

      const https = require("https");
      const parser = require("node-html-parser");
      const Url =
        "https://search.naver.com/search.naver?ie=utf8&query=" + title;

      https.get(Url, (res) => {
        let data = "";

        res.on("data", (d) => {
          data += d;
        });
        res.on("end", () => {
          let titleInnerText;
          let root = parser.parse(data);

          let title = root.querySelectorAll(".sub_title").shift();
          if (!title) {
            callback(movieList);
            return;
          }
          titleInnerText = title.innerText.trim().split("  ");
          year = titleInnerText.pop();
          etitle = titleInnerText.pop();
          if (etitle === "영화") {
            callback(movieList);
            return;
          }
          etitle = etitle.split(" ").join("-").toLowerCase();
          etitle = etitle.replace(/:/g, "");
          movieList[i].etitle = etitle;
          movieList[i].year = year;

          const Url2 =
            "https://www.metacritic.com/movie/" +
            movieList[i].etitle +
            "-" +
            movieList[i].year +
            "/critic-reviews";

          https.get(Url2, (res) => {
            let data = "";

            res.on("data", (d) => {
              data += d;
            });
            res.on("end", () => {
              let scoreInnerText;
              let root = parser.parse(data);
              let score = root
                .querySelectorAll(
                  "td.left.inset_right2" && "span.metascore_w.larger.movie"
                )
                .shift();
              if (score) {
                scoreInnerText = score.innerText.trim();
                movieList[i].metacriticScore = parseFloat(scoreInnerText);
                callback(movieList);
              } else {
                const Url1 =
                  "https://www.metacritic.com/movie/" +
                  movieList[i].etitle +
                  "/critic-reviews";
                https.get(Url1, (res) => {
                  let data = "";

                  res.on("data", (d) => {
                    data += d;
                  });
                  res.on("end", () => {
                    let scoreInnerText;
                    let root = parser.parse(data);
                    let score = root
                      .querySelectorAll(
                        "td.left.inset_right2" &&
                          "span.metascore_w.larger.movie"
                      )
                      .shift();
                    if (score) {
                      scoreInnerText = score.innerText.trim();
                      movieList[i].metacriticScore = parseFloat(scoreInnerText);
                      callback(movieList);
                    } else {
                      callback(movieList);
                    }
                  });
                });
              }
            });
          });
        });
      });
    }
  }, 0);
}
