var slider1 = document.querySelector(".slider-1");
slider1.addEventListener("over", function () {
  console.log(this.data);
});

var slider2 = document.querySelector(".slider-2");
slider2.addEventListener("over", function (e) {
  console.log(this.data);
  console.log(e);
});
