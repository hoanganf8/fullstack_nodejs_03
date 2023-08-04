// function max() {
//   console.log(arguments);
// }

//

//rest parameter
// function max(result, ...args) {
//   console.log(result);
//   //   console.log(arguments);
//   console.log(args);
// }

// max("Max = ", 5, 10, 15, 20, 25, 30, 35, 40);

//Exression Function

//anonymous function

// var getMsg = function () {
//   console.log("Xin chào F8");
// };

// getMsg();

// //Kiểm tra 1 biến có phải là hàm hay không?
// if (typeof getMsg === "function") {
//   console.log("Đây là hàm");
// }

// //IIFE
// (function (value) {
//   console.log("Hoàng An F8: " + value);
// })("Fullstack");

var getA = function (fn, ...args) {
  //   console.log(a);
  //Thực thi hàm a
  console.log("getA");
  if (typeof fn === "function") {
    fn(...args);
  }
};

var getB = function (name, email) {
  console.log("getB: " + name, email);
};

var handleGetB = function () {
  getB("F8");
};

getA(getB, "F8", "hoangan.web@gmail.com"); //Callback

// getA(); //mất 2s
// getB(); //mất 1s

//tenham() => Lời gọi hàm chủ động

//Delay đoạn chương trình
setTimeout(
  function (name, email) {
    console.log("Xin chào F8", name, email);
  },
  2000,
  "Fullstack",
  "hoangan.web@gmail.com",
);

//Hàm con, closure, đệ quy
