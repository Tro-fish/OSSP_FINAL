module.exports = { loadRanking };
function loadRanking(nTheather, callback) {
  setTimeout(() => {
    const loadDatabase = require("./makeMovieList");
    const loadMetacritic = require("./loadMetacritic");
    loadDatabase.loadRanking(nTheather, (movieDatabase) => {
      let count = 0;
      loadMetacritic.searchMetacritic(movieDatabase, (metacritic) => {
        count++;
        movieDatabase = metacritic;
        if (count === movieDatabase.length) {
          movieDatabase = movieDatabase.map((obj) => {
            if (obj.metacriticScore) {
              obj.avg =
                Math.round(
                  (100 *
                    (obj.cgvScore +
                      10 * obj.naverScore +
                      obj.metacriticScore)) /
                    3
                ) / 100;
            } else {
              obj.avg =
                Math.round((100 * (obj.cgvScore + 10 * obj.naverScore)) / 2) /
                100;
            }
            return obj;
          });
          sortMovieScore(movieDatabase);
          callback(movieDatabase);
        }
      });
    });
  }, 0);
}

function sortMovieScore(database) {
  database.sort((obj1, obj2) => {
    if (isNaN(obj1.avg)) return 1;
    if (isNaN(obj2.avg)) return -1;

    return obj2.avg - obj1.avg;
  });
}

/* check mainData.js
loadRanking(0, (movie) => {
  console.log(movie);
  console.log("Done!");
});
 */
