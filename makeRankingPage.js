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

      if (!first) first = objEmpty;
      if (!second) second = objEmpty;
      if (!third) third = objEmpty;

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
                ${second.avg} <br />평균예매율: ${second.reserve}%
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
                ${first.avg} <br />평균예매율: ${first.reserve}%
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
                ${third.avg} <br />평균예매율: ${third.reserve}%
              </p>
            </div>
          </div>
        </div>
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
    <script>
      var staticBackdrop = document.getElementById("staticBackdrop");
      staticBackdrop.addEventListener("show.bs.modal", function (event) {
        // Button that triggered the modal
        let button = event.relatedTarget;
        // Extract info from data-bs-* attributes
        let CS = button.getAttribute("data-bs-CS");
        let NS = button.getAttribute("data-bs-NS");
        let MS = button.getAttribute("data-bs-MS");
        let CR = button.getAttribute("data-bs-CR");
        let NR = button.getAttribute("data-bs-NR");
        let detail = document.querySelector("#modal-body");
        let close = document.querySelector("#close");
        let div = document.createElement("div");
        let ul = document.createElement("ul");
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");
        let li4 = document.createElement("li");
        let li5 = document.createElement("li");
        detail.appendChild(div);
        div.appendChild(ul);

        if (CS) {
          li1.textContent = "CGV Golden Egg:" + CS;
          ul.appendChild(li1);
        }
        if (NS) {
          li2.textContent = "네이버 영화 별점:" + NS;
          ul.appendChild(li2);
        }
        if (MS) {
          li3.textContent = "메타크리틱 메타스코어:" + MS;
          ul.appendChild(li3);
        }
        if (CR) {
          li4.textContent = "CGV 예매율:" + CR + "%";
          ul.appendChild(li4);
        }
        if (NR) {
          li5.textContent = "네이버 예매율:" + NR + "%";
          ul.appendChild(li5);
        }

        close.addEventListener("click", () => {
          div.remove();
        });
      });
    </script>
  </body>
</html>`;

      let body3 = "";

      movieRanking.slice(0, 4).forEach((obj, i) => {
        if (obj.title) {
          body3 += `
        <div class="col-lg-3 col-md-6 col-sm-12 mt-2 mb-2">
          <div class="card shadow ps-0 pe-0 rounded-3 w-100" style="width: 18rem">
            <a target="_blank" href="${obj.detail}">
              <img
                src="${obj.img}"
                class="card-img-top ps-0 pe-0 rounded-3 w-100"
                alt="현재 상영 ${i + 4}위"
              />
            </a>
            <div class="card-body">
              <h5 class="card-title">
                <strong> No.${i + 4} </strong><br />
                ${obj.title}
              </h5>
              <ul class="card-text">
                <li>${obj.genre}</li>
                <li>개봉일: ${obj.date}</li>
                <li>평균평점: ${obj.avg}</li>
                <li>평균예매율: ${obj.reserve}%</li>
              </ul>
              ${detailButton(obj)}
            </div>
          </div>
        </div>  
        `;
        }
      });

      let body3_top = `<hr />
    <div class="container">`;
      if (movieRanking[0].title)
        body3_top += `<div class="row mt-5 mb-5">
        <img class="recommend" src="recommend.jpg" alt="logo" />
      </div>`;
      body3_top += `<div class="row">`;
      const body3_bottom = `
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">세부정보</h5>
      </div>
      <div class="modal-body" id = "modal-body">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id = "close">Close</button>
      </div>
    </div>
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
  `;

      body3 = body3_top + body3 + body3_bottom;

      const page = header + body2 + body3 + footer;
      callback(page);
    });
  }, 0);
}
function detailButton(obj) {
  let buttonHTML = `
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
      `;

  if (obj.cgvScore) {
    buttonHTML += ` data-bs-CS=" ${obj.cgvScore}"`;
  }
  if (obj.naverScore) {
    buttonHTML += ` data-bs-NS=" ${obj.naverScore}"`;
  }
  if (obj.metacriticScore) {
    buttonHTML += ` data-bs-MS=" ${obj.metacriticScore}"`;
  }
  if (obj.cgvReserve) {
    buttonHTML += ` data-bs-CR=" ${obj.cgvReserve}"`;
  }
  if (obj.naverReserve) {
    buttonHTML += ` data-bs-NR=" ${obj.naverReserve}"`;
  }
  buttonHTML += `
    >
      자세히
    </button>
  `;
  return buttonHTML;
}
/* check makeRankingPage
loadPage(0, (page) => {
  console.log(page);
  console.log("Done!");
});
 */
 