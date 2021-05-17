let theather;

let button = document.querySelector("#CGV_1");
button.addEventListener("click", () => {
  exports.theather = "http://www.cgv.co.kr/theaters/?theaterCode=0049";
});

let button2 = document.querySelector("#CGV_2");
button2.addEventListener("click", () => {
  exports.theather = "http://www.cgv.co.kr/theaters/?theaterCode=0012";
});

let button3 = document.querySelector("#CGV_3");
button3.addEventListener("click", () => {
  exports.theather = "http://www.cgv.co.kr/theaters/?theaterCode=0041";
});

let button4 = document.querySelector("#CGV_4");
button4.addEventListener("click", () => {
  exports.theather = "http://www.cgv.co.kr/theaters/?theaterCode=0242";
});

let button5 = document.querySelector("#CGV_5");
button5.addEventListener("click", () => {
  exports.theather = "http://www.cgv.co.kr/theaters/?theaterCode=0257";
});
