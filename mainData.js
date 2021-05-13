module.exports = { loadRanking };
function loadRanking(callback) {
  setTimeout(() => {
    const loadCgv = require("./loadCgv");
    const loadNaver = require("./loadNaver");
    let movieDatabase = new Array();

    loadCgv.searchCgvMobile((cgvList) => {
      movieDatabase = cgvList;

      loadNaver.searchNaver((naverList) => {
        for (let i = 0; i < movieDatabase.length; i++) {
          let idx = getTitleIndex(naverList, movieDatabase[i]); // exist return idx, not -1

          if (idx > -1) {
            movieDatabase[i].genre = naverList[idx].genre;
            movieDatabase[i].naverScore = naverList[idx].naverScore;
            movieDatabase[i].naverReserve = naverList[idx].naverReserve;
          } else {
            // console.log("don't find " + movieDatabase[i].title);
            delete movieDatabase.splice(i, 1);
            i--;
          }
        }
        movieDatabase = movieDatabase.map((obj) => {
          obj.avg =
            Math.round((100 * (obj.cgvScore + 10 * obj.naverScore)) / 2) / 100;
          return obj;
        });
        //console.log(movieDatabase);
        sortMovieScore(movieDatabase);
        callback(movieDatabase);
      });
    });
  }, 0);
}
function getTitleIndex(addObj, database) {
  for (let i = 0; i < addObj.length; i++) {
    if (addObj[i].title.substring(0, 5) === database.title.substring(0, 5)) {
      return i;
    }
  }
  return -1;
}
function sortMovieScore(database) {
  database.sort((obj1, obj2) => {
    if (isNaN(obj1.avg)) return 1;
    if (isNaN(obj2.avg)) return -1;

    return obj2.avg - obj1.avg;
  });
}

/* check mainData.js
loadRanking((movie) => {
  console.log(movie);
  console.log("Done!");
});
 */
