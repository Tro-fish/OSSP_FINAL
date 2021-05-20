module.exports = { loadPage };
function loadPage(nTheather, callback) {
  setTimeout(() => {
    const Ranking = require("./mainData");
    Ranking.loadRanking(nTheather, (movieRanking) => {
      console.log(movieRanking);
      console.log("Load Ranking Done!");
      const first = movieRanking.shift();
      const second = movieRanking.shift();
      const third = movieRanking.shift();
      const forth = movieRanking.shift();
      const fifth = movieRanking.shift();
      const sixth = movieRanking.shift();
      const seventh = movieRanking.shift();
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style3.css" />
    <link rel="stylesheet" href="style.css">
    <title>MovieSelector</title>
  </head>
  <body>`;
      const footer = `<!-- Optional JavaScript; choose one of the two! -->
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
      crossorigin="anonymous"
    ></script>
  </body>
</html>`;
      const body2 = `
<div class="container">
<div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card" style="width: 22rem;">
          <img src="${second.img}" class="card-img-second" alt="현재 상영 2위">
          <div class="card-body">
            <h5 class="card-title"><strong>NO.2</strong><br>${second.title}</h5>
            <p class="card-text">${second.genre} <br>개봉일: ${second.date}<br>평균평점: ${second.avg} <br>평균예매율: ${second.reserve}%</p>
          </div>
        </div>
      </div>
      
      <div class="col">
        <div class="card" style="width: 24rem;">
          <img src="${first.img}" height="auto" class="card-img-first" alt="현재 상영 1위">
          <div class="card-body">
            <h5 class="card-title"><strong>NO.1</strong> <br>${first.title}</h5>
            <p class="card-text">${first.genre} <br>개봉일: ${first.date}<br>평균평점: ${first.avg} <br>평균예매율: ${first.reserve}%</p>
           
          </div>
        </div>
      </div>
      
      <div class="col">
        <div class="card" style="width: 22rem;">
          <img src="{third.img}" class="card-img-third" alt="현재 상영 3위">
          <div class="card-body">
            <h5 class="card-title"><strong>NO.3</strong> <br>{third.title}</h5>
            <p class="card-text">{third.genre} <br>개봉일: {third.date} <br>평균평점: {third.avg} <br>평균예매율: {third.reserve}%</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    `;
      const body3 = `
    <hr />
    <p>이런 영화도 있어요</p>
    <div class="container">
      <div class="row">
        <div class="col-3">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <strong>4위</strong>
            <div class="accordion-item">
              <img src="{forth.img}" width="200px" height="auto" alt="4" />
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <p>{forth.title}</p>
              </button>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body">
                  <ul>
                    <li>개봉일: {forth.date}</li>
                    <li>장르: {forth.genre}</li>
                    <li>평균평점: {forth.avg}</li>
                    <li>평균예매율: {forth.reserve}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <strong>5위</strong>
            <div class="accordion-item">
              <img src="{fifth.img}" width="200px" height="auto" alt="5" />
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <p>{fifth.title}</p>
              </button>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body">
                  <ul>
                    <li>개봉일: {fifth.date}</li>
                    <li>장르: {fifth.genre}</li>
                    <li>평균평점: {fifth.avg}</li>
                    <li>평균예매율: {fifth.reserve}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <strong>6위</strong>
            <div class="accordion-item">
              <img src="" width="200px" height="auto" alt="6" />
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <p></p>
              </button>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body">
                  <ul>
                    <li>개봉일:</li>
                    <li>장르: </li>
                    <li>평균평점: </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <strong>7위</strong>
            <div class="accordion-item">
              <img src="" width="200px" height="auto" alt="7" />
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <p></p>
              </button>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body">
                  <ul>
                    <li>개봉일:</li>
                    <li>장르: </li>
                    <li>평균평점:</li>
                    <li>예매율: </li> 
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-grid gap-2 col-6 mx-auto"> 
        <br><a class="btn btn-primary btn-lg" href="http://www.cgv.co.kr/ticket/" role="button">>예매하러가기!<</a>
      </div>
    </div>
  `;
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