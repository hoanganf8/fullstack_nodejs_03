//DOM CSS: Can thiệp CSS vào các element thông qua thuộc tính style

// var content = document.querySelector(".content");

// content.style = "color: red; font-weight: bold;";

// content.style = "background: red;";

// console.log(content.style);
// content.style.color = "red";
// content.style.fontWeight = "bold"; //font-weight
// content.style.textDecoration = "line-through";

// var css = {
//   color: "red",
//   fontWeight: "bold",
//   textDecoration: "line-through",
//   fontStyle: "italic",
//   backgroundImage: `url("https://picsum.photos/536/354")`,
//   transition: "all 0.4s ease",
//   transform: "translateX(20px)",
// };

// Object.assign(content.style, css);

//Bài tập: Thêm các thuộc tính sau
/*
background-image: url(linkanh)
transition: all 0.4s ease
transform: translateX(20px)
*/

var content = document.querySelector(".content");
var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  if (!content.style.display) {
    content.style.display = "none";
    btn.innerText = "Hiện";
  } else {
    content.style.display = "";
    btn.innerText = "Ẩn";
  }
});
