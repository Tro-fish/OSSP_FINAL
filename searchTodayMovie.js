module.exports = { searchTodayMovie };

function searchTodayMovie(nTheather, callback) {
  setTimeout(() => {
    let titleList = new Array();
    const theather = [
      "http://www.cgv.co.kr/common/showtimes/iframeTheater.aspx?areacode=02&theatercode=0049",
      "http://www.cgv.co.kr/common/showtimes/iframeTheater.aspx?areacode=02&theatercode=0012",
      "http://www.cgv.co.kr/common/showtimes/iframeTheater.aspx?areacode=02&theatercode=0041",
      "http://www.cgv.co.kr/common/showtimes/iframeTheater.aspx?areacode=02&theatercode=0242",
      "http://www.cgv.co.kr/common/showtimes/iframeTheater.aspx?areacode=02&theatercode=0257"
    ];
    const urlCGVm = theather[nTheather];
    const http = require("http");
    const parser = require("node-html-parser");
    if (!urlCGVm) {
      console.log("yet");
      return 0;
    }
    console.log(urlCGVm);
    http.get(urlCGVm, res => {
      let data = "";

      res.on("data", d => {
        data += d;
      });
      res.on("end", () => {
        let titleInnerText;
        let root = parser.parse(data);

        root.querySelectorAll(".info-movie").forEach(title => {
          titleInnerText = title.innerText.trim();
          titleInnerText = titleInnerText
            .split("\r")
            .splice(1, 1)
            .join()
            .trim();
          titleInnerText = titleInnerText;
          titleList.push({ title: titleInnerText });
        });
        callback(titleList);
      });
    });
  }, 0);
}
/* Test
searchTodayMovie(0, (movie) => {
  console.log(movie);
  console.log("Done!");
});
*/
