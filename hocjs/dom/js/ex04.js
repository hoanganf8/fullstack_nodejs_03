//DOM HTML: Thao tác với nội dung, thuộc tính HTML

// var content = document.querySelector(".content");

// //1. Lấy nội dung trong thẻ html (Tất cả)
// console.log(content.innerHTML);

// //2. Lấy nội dung trong thẻ html (Chỉ lấy text)
// console.log(content.innerText);

// //3. Lấy nội dung trong thẻ html (Chỉ lấy text, giữ nguyên khoảng trắng)
// console.log(content.textContent);

// //4. Lấy nội dung bao gồm element đang tác động
// console.log(content.outerHTML);

// // console.log(content.outerText);

// Cập nhật nội dung HTML

// content.innerHTML = `<h1>Javascript không khó</h1>`;

// content.innerText = `<h1>Javascript không khó</h1>`;

// content.outerHTML = `<h1>Javascript không khó</h1>`;

// content.outerText = `<h1>Javascript không khó</h1>`;

// content.innerText = "";

//Bài tập: Xây dựng Counter

/*
Bước 1: Tạo element
- Nút +
- Nút -
- Thẻ h1

Bước 2: Gán sự kiện vào 2 button

Bước 3: Xử lý logic tăng/giảm

- Logic tăng:
+ Lấy giá trị cũ của thẻ h1
+ Tăng lên 1 đơn vị
+ Cập nhật lại vào thẻ h1

- Logic giảm:
+ Lấy giá trị cũ của thẻ h1
+ Giảm 1 đơn vị
+ Cập nhật lại vào thẻ h1
*/

var number = document.querySelector(".number");
var upBtn = document.querySelector(".up");
var downBtn = document.querySelector(".down");

var countUp = 0;
var countDown = 0;

upBtn.addEventListener("click", function () {
  var count = number.innerText;
  count++;
  countUp++;
  number.innerText = count;
  this.querySelector("span").innerText = countUp;
});

downBtn.addEventListener("click", function () {
  var count = number.innerText;
  count--;
  countDown++;
  number.innerText = count;
  this.querySelector("span").innerText = countDown;
});
