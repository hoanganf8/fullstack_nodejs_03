//Tạo các element
var carousel = document.querySelector(".carousel");
var carouselInner = carousel.querySelector(".carousel-inner");
var nextBtn = carousel.querySelector(".next");
var prevBtn = carousel.querySelector(".prev");

//Lấy kích thước của 1 item
var itemWidth = carouselInner.clientWidth; //Lấy chiều rộng của 1 element

//Lấy tất cả items
var items = carouselInner.children;

// Tính tổng kích thước các items
var totalWidth = items.length * itemWidth;

// Cập nhật CSS cho carousel inner
carouselInner.style.width = `${totalWidth}px`;

var position = 0;
nextBtn.addEventListener("click", function () {
  //   console.log(position);
  if (Math.abs(position) < totalWidth - itemWidth) {
    position -= itemWidth;
    carouselInner.style.translate = `${position}px`;
  }
});

prevBtn.addEventListener("click", function () {
  //   console.log(position);
  if (Math.abs(position) > 0) {
    position += itemWidth;
    carouselInner.style.translate = `${position}px`;
  }
});
