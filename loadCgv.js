module.exports = { searchCgvMobile };

const dataMovie = (title, img, date, cgvScore, cgvReserve) => {
  return {
    title: title,
    img: img,
    date: date,
    cgvScore: cgvScore,
    cgvReserve: cgvReserve,
  };
};
function searchCgvMobile(callback) {
  setTimeout(() => {
    let movieDatabase = new Array();
    let titleList = new Array();
    let imgList = new Array();
    let detailList = new Array();
    let eggGreatList = new Array();
    let perReserveList = new Array();
    let releaseDateList = new Array();

    const http = require("http");
    const parser = require("node-html-parser");
    let urlCGVm =
      "http://m.cgv.co.kr/WebAPP/MovieV4/movieList.aspx?mtype=now&iPage=1";

    http.get(urlCGVm, (res) => {
      let data = "";

      res.on("data", (d) => {
        data += d;
      });
      res.on("end", () => {
        let titleInnerText;
        let eggGreatInnerText;
        let imgInnerHTML;
        let perReserveText;
        let dateText;
        let movieIndex;
        let root = parser.parse(data);

        /*find movie title
         * but Some is not the title of movie */
        root.querySelectorAll(".tit").forEach((title) => {
          titleInnerText = title.innerText.trim();
          titleList.push(titleInnerText);
        });

        /*find poster url*/
        root.querySelectorAll(".imgbox").forEach((img) => {
          imgInnerHTML = img.innerHTML.trim();
          titleList.forEach((title) => {
            imgInnerHTML = imgInnerHTML.split('<img src="');
            imgInnerHTML = imgInnerHTML.pop();
            imgInnerHTML = imgInnerHTML.split('" alt').shift();
            imgInnerHTML = imgInnerHTML.replace("150.jpg", "320.jpg");
            movieIndex = imgInnerHTML.split("/");
            movieIndex = movieIndex.pop();
            movieIndex = movieIndex.split("_");
            movieIndex = movieIndex.shift();
          });
          imgList.push(imgInnerHTML);
          detailList.push(
            "http://www.cgv.co.kr/movies/detail-view/?midx=" + movieIndex
          );
        });

        /*find cgv score - eggGreat*/
        root.querySelectorAll(".percent, .eggState").forEach((eggGreat) => {
          eggGreatInnerText = eggGreat.innerText;
          eggGreatList.push(parseInt(eggGreatInnerText));
        });
        /*find cgv reserve rate*/
        root.querySelectorAll(".per_reserve").forEach((perReserve) => {
          perReserveText = perReserve.innerText.split("예매율 ").pop();
          perReserveList.push(parseFloat(perReserveText));
        });
        root.querySelectorAll(".rel_date").forEach((date) => {
          dateText = date.innerText.split(" ").shift();
          releaseDateList.push(dateText);
        });
        for (let i = 0; i < titleList.length; i++) {
          movieDatabase.push(
            dataMovie(
              titleList[i],
              imgList[i],
              releaseDateList[i],
              eggGreatList[i],
              perReserveList[i]
            )
          );
        }
        callback(movieDatabase);
      });
    });
  }, 0);
}
