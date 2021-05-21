module.exports = { searchNaver };

const dataMovie = (title, genre, naverScore, naverReserve) => {
  return {
    title: title,
    genre: genre,
    naverScore: naverScore,
    naverReserve: naverReserve,
  };
};
function searchNaver(callback) {
  setTimeout(() => {
    const https = require("https");
    const parser = require("node-html-parser");

    let urlNaver = "https://movie.naver.com/movie/running/current.nhn";

    let movieDatabase = new Array();
    let navertitleList = new Array();
    let naverGenreList = new Array();
    let scoreList = new Array();
    https.get(urlNaver, (res) => {
      let data = "";

      res.on("data", (d) => {
        data += d;
      });
      res.on("end", () => {
        let titleInnerText;
        let genreInnerText;
        let scoreInnerText;
        const MAX = 30;
        let count = 0;

        let root = parser.parse(data);
        /*InnerText -> only movie title*/
        root.querySelectorAll(".tit").forEach((title) => {
          count++;
          if (count > MAX) return;
          titleInnerText = title.innerText.trim();
          let temptitle = titleInnerText.split("</a>").join();
          temptitle = temptitle.split("\t").pop();
          temptitle = temptitle.replace(/:/g, "-");
          navertitleList.push(temptitle);
        });
        count = 0;
        root.querySelectorAll(".link_txt").forEach((genre) => {
          count++;
          if (count > 3 * MAX) return;

          if (!genre.innerHTML.includes("genre")) {
            return;
          }
          genreInnerText = genre.innerText.trim();
          genreInnerText = genreInnerText.split("\t").join();
          genreInnerText = genreInnerText.split("\r").join();
          let tempGenre = genreInnerText.split("\n").join();
          tempGenre = tempGenre.replace(/,/g, "");
          tempGenre = tempGenre.replace(/ /g, " #");
          naverGenreList.push("#" + tempGenre);
        });
        count = 0;
        root.querySelectorAll(".num").forEach((score) => {
          count++;
          if (count > 2 * MAX) return; // too much movie! limit number of movie
          scoreInnerText = score.innerText.trim();
          scoreList.push(parseFloat(scoreInnerText));
        });
        for (let i = 0; i < navertitleList.length; i++) {
          movieDatabase.push(
            dataMovie(
              navertitleList[i],
              naverGenreList[i],
              scoreList[2 * i],
              scoreList[2 * i + 1]
            )
          );
        }
        callback(movieDatabase);
      });
    });
  }, 0);
}
