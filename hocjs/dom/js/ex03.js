var handleClick = function () {
  console.log("Đăng ký khóa học thành công");
};

var handleInput = function () {
  console.log("Bạn đang gõ");
};

/*
Gán sự kiện thông qua DOM
Gán dựa vào thuộc tính HTML
=> Event Handler

Nhược điểm: 
Trong 1 element => Không gán được 2 sự kiện giống nhau
*/

var btn = document.querySelector(".btn");
// btn.onclick = function () {
//   console.log("Hành động 1");
// };

// //if else
// btn.onclick = function () {
//   console.log("Hành động 2");
// };

//Event Listener

//1. addEventListener(type, listener)
var handleClick = function () {
  console.log("Hành động 1");
};
btn.addEventListener("click", handleClick);

// btn.addEventListener("click", function () {
//   console.log("Hành động 2");
// });

//2. removeEventListener(type, listener)
//=> Loại bỏ listener khỏi element
var finishBtn = document.querySelector(".finish");
finishBtn.addEventListener("click", function () {
  console.log("Đã hoàn thành");
  btn.removeEventListener("click", handleClick);
});
