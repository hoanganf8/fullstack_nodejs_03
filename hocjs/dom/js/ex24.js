var slider = document.querySelector(".slider");

//Định nghĩa 1 sự kiện có tên: finish

var finishEvent = new Event("finish");
// console.log(finishEvent);

slider.addEventListener("input", function () {
  if (this.value === "100") {
    slider.dispatchEvent(finishEvent);
    finishEvent.abc = "xyz";
  }
});

slider.addEventListener("mousemove", function (e) {
  finishEvent.offsetX = e.offsetX;
  finishEvent.offsetY = e.offsetY;
});

//Listener Event
slider.addEventListener("finish", function (e) {
  console.log(e);
  console.log("Đã xong");
});
