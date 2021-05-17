module.exports = { loadRanking };
function loadRanking(nTheather, callback) {
  setTimeout(() => {
    const loadCgv = require("./loadCgv");
    const loadNaver = require("./loadNaver");
    const todayMovie = require("./searchTodayMovie");

    let movieDatabase = new Array();
    let todayTitleList = new Array();
    loadCgv.searchCgvMobile((cgvList) => {
      movieDatabase = cgvList;
      todayMovie.searchTodayMovie(nTheather, (todayList) => {
        todayTitleList = todayList;

        for (let i = 0; i < movieDatabase.length; i++) {
          let istoday = getTitleIndex(todayTitleList, movieDatabase[i]);
          if (istoday === -1) {
            delete movieDatabase.splice(i, 1);
            i--;
          } else continue;
        }

        loadNaver.searchNaver((naverList) => {
          for (let i = 0; i < movieDatabase.length; i++) {
            let idx = getTitleIndex(naverList, movieDatabase[i]); // exist return idx, not -1

            if (idx > -1) {
              movieDatabase[i].genre = naverList[idx].genre;
              movieDatabase[i].naverScore = naverList[idx].naverScore;
              movieDatabase[i].naverReserve = naverList[idx].naverReserve;
            } else {
              delete movieDatabase.splice(i, 1);
              i--;
            }
          }

          callback(movieDatabase);
        });
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

/* check makeMovieList.js

loadRanking(0, (movie) => {
  console.log(movie);
  console.log("Done!");
});

 */
