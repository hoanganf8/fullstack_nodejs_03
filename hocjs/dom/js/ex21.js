/*
Scroll Event

1. Lấy vị trí scroll so với top, left

2. scroll() => Tự động kéo thanh cuộn tới vị trí mong muốn
*/

var topBtn = document.querySelector(".top");

window.addEventListener("scroll", function () {
  //   console.log("Kéo thanh cuộn");
  var y = window.scrollY;
  //   var x = window.scrollX;
  //   console.log(x, y);
  if (y >= 60) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", function () {
  window.scroll(0, 0);
});

// window.addEventListener("load", function () {
//   var bodyHeight = document.body.clientHeight;
//   console.log(bodyHeight);
//   window.scroll(0, bodyHeight);
// });
