module.exports = { loadPage };
const objEmpty = {
  title: "",
  img: "",
  detail: "",
  date: "",
  cgvScore: 0,
  cgvReserve: 0,
  genre: "",
  naverScore: 0,
  naverReserve: 0,
  etitle: "",
  year: "",
  avg: 0,
  reserve: 0,
};
const theather = [
  "http://www.cgv.co.kr/theaters/?areacode=02&theaterCode=0049",
  "http://www.cgv.co.kr/theaters/?areacode=02&theaterCode=0012",
  "http://www.cgv.co.kr/theaters/?areacode=02&theaterCode=0041",
  "http://www.cgv.co.kr/theaters/?areacode=02&theaterCode=0242",
  "http://www.cgv.co.kr/theaters/?areacode=02&theaterCode=0257",
];
function loadPage(nTheather, callback) {
  setTimeout(() => {
    const Ranking = require("./mainData");
    Ranking.loadRanking(nTheather, (movieRanking) => {
      console.log(movieRanking);
      console.log("Load Ranking Done!");
      const urlTimetable = theather[nTheather];
      let first = movieRanking.shift();
      let second = movieRanking.shift();
      let third = movieRanking.shift();
      let fourth = movieRanking.shift();
      let fifth = movieRanking.shift();
      let sixth = movieRanking.shift();
      let seventh = movieRanking.shift();
      if (!first) first = objEmpty;
      if (!second) second = objEmpty;
      if (!third) third = objEmpty;
      if (!fourth) fourth = objEmpty;
      if (!fifth) fifth = objEmpty;
      if (!sixth) sixth = objEmpty;
      if (!seventh) seventh = objEmpty;
      const header = `<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!--<script data-main="scripts/app" src="scripts/require.js"></script>-->
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
      crossorigin="anonymous"
    />
    <!-- Link CSS file -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
    />
    <link rel="stylesheet" href="style3.css" />

    <title>MovieSelector</title>
  </head>

  <body>`;

      const body2 = `
<div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card" style="width: 22rem">
            <img
              src="${second.img}"
              class="card-img-second"
              alt="현재 상영 2위"
            />
            <div class="card-body">
              <h5 class="card-title">
                <strong>NO.2</strong><br />${second.title}
              </h5>
              <p class="card-text">
                ${second.genre} <br />개봉일: ${second.date}<br />평균평점:
                ${second.avg} <br />${second.reserve}%
              </p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card" style="width: 24rem">
            <img
              src="${first.img}"
              class="card-img-first"
              alt="현재 상영 1위"
            />
            <div class="card-body">
              <h5 class="card-title">
                <strong>NO.1</strong> <br />${first.title}
              </h5>
              <p class="card-text">
                ${first.genre} <br />개봉일: ${first.date}<br />평균평점:
                ${first.avg} <br />평균예매율: ${first.reserve}
              </p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card" style="width: 22rem">
            <img
              src="${third.img}"
              class="card-img-third"
              alt="현재 상영 3위"
            />
            <div class="card-body">
              <h5 class="card-title">
                <strong>NO.3</strong> <br />${third.title}
              </h5>
              <p class="card-text">
                ${third.genre} <br />개봉일: ${third.date} <br />평균평점:
                ${third.avg} <br />평균예매율: ${third.reserve}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
      const body3 = `
    <hr />
    <div class="container">
      <div class="row mt-5 mb-5">
        <img class="recommend" src="recommend.jpg" alt="logo" />
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12 mt-2 mb-2">
          <div class="card shadow ps-0 pe-0 rounded-3 w-100" style="width: 18rem">
            <a target="_blank" href="${fourth.detail}">
              <img
                src="${fourth.img}"
                class="card-img-top ps-0 pe-0 rounded-3 w-100"
                alt="현재 상영 4위"
              />
            </a>
            <div class="card-body">
              <h5 class="card-title">
                <strong> No.4 </strong><br />
                ${fourth.title}
              </h5>
              <ul class="card-text">
                <li>${fourth.genre}</li>
                <li>개봉일: ${fourth.date}</li>
                <li>평균평점: ${fourth.avg}</li>
                <li>평균예매율: ${fourth.reserve}%</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mt-2 mb-2">
          <div class="card shadow ps-0 pe-0 rounded-3 w-100" style="width: 18rem">
            <a target="_blank" href="${fifth.detail}">
              <img
                src="${fifth.img}"
                class="card-img-top"
                alt="현재 상영 5위"
              />
            </a>
            <div class="card-body">
              <h5 class="card-title">
                <strong>No.5</strong><br />
                ${fifth.title}
              </h5>
              <ul class="card-text">
                <li>${fifth.genre}</li>
                <li>개봉일: ${fifth.date}</li>
                <li>평균평점: ${fifth.avg}</li>
                <li>평균예매율: ${fifth.reserve}%</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mt-2 mb-2">
          <div class="card shadow ps-0 pe-0 rounded-3 w-100" style="width: 18rem">
            <a target="_blank" href="${sixth.detail}">
              <img
                src="${sixth.img}"
                class="card-img-top"
                alt="현재 상영 6위"
              />
            </a>
            <div class="card-body">
              <h5 class="card-title">
                <strong>No.6</strong><br />
                ${sixth.title}
              </h5>
              <ul class="card-text">
                <li>${sixth.genre}</li>
                <li>개봉일: ${sixth.date}</li>
                <li>평균평점: ${sixth.avg}</li>
                <li>평균예매율: ${sixth.reserve}%</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mt-1 mb-1">
          <div class="card shadow ps-0 pe-0 rounded-3 w-100" style="width: 18rem">
            <a target="_blank" href="${seventh.detail}">
              <img
                src="${seventh.img}"
                class="card-img-top"
                alt="현재 상영 7위"
              />
            </a>
            <div class="card-body">
              <h5 class="card-title">
                <strong>No.7</strong><br />
                ${seventh.title}
              </h5>
              <ul class="card-text">
                <li>${seventh.genre}</li>
                <li>개봉일: ${seventh.date}</li>

                <li>평균평점: ${seventh.avg}</li>
                <li>예매율: ${seventh.reserve}%</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row mt-2 mb-5">
          <div class="d-grid gap-2 col-6 mx-auto">
            <br /><a
              class="btn btn-primary btn-lg"
              target="_blank"
              href="${urlTimetable}"
              role="button"
              >&#62;예매하러가기!&#60;</a
            >
          </div>
        </div>
        <hr />
        <a class="top" href="#" title="top"
          ><i class="bi bi-arrow-up-short"></i>TOP</a
        >
      </div>
    </div>
  `;

      const footer = `<!-- Optional JavaScript; choose one of the two! -->
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
      crossorigin="anonymous"
    ></script>
  </body>
</html>`;
      const page = header + body2 + body3 + footer;
      callback(page);
    });
  }, 0);
}

/* check makeRankingPage
loadPage((page) => {
  console.log(page);
  console.log("Done!");
});
*/
