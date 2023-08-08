// var welcome = "Hoàng An F8";
// //Biến toàn cục

// var getMessage = function (msg) {
//   console.log(`getMessage`);

//   var a = 10; //Biến cục bộ của hàm cha

//   //Định nghĩa hàm con
//   var display = function () {
//     console.log(`Xin chào: ${msg}`);
//     console.log(`a = ${a}`);
//     console.log(`welcome = ${welcome}`);
//   };

//   //Gọi hàm con
//   display();
// };

// getMessage("F8");

var sum = function (a) {
  return function (b) {
    return a + b;
  };
};

/*
Cần thực hiện 3 phép tính: 
10 + 5
10 + 20 
10 + 30
*/
// var add = sum(10); //return function
// console.log(add(5));
// console.log(add(20));
// console.log(add(30));
// console.log(sum(10)(20));

//Closure

//setTimeout => Delay

// setTimeout(
//   function (name, email) {
//     console.log(`Xin chào F8`, name, email);
//   },
//   2000,
//   "Hoàng An",
//   "contact@unicode.vn",
// );

//setInterval => Lặp đi lặp lại sau 1 khoảng thời gian

// var count = 0;
// var id = setInterval(function () {
//   console.log(++count);
//   if (count === 10) {
//     clearInterval(id);
//   }
// }, 1000);

//Đệ quy
var showNumber = function (n) {
  console.log(n);
  if (n > 1) {
    showNumber(n - 1);
  }
};

// showNumber(10);

//Tính tổng S = 1 + 2 + 3 + ... + n
/*
Dùng đệ quy
*/

// var getTotal = function (n) {
//   if (n === 1) {
//     return 1;
//   }

//   return n + getTotal(n - 1);
// };

// console.log(getTotal(10));

var fibinaci = function (n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibinaci(n - 1) + fibinaci(n - 2);
};

console.log(fibinaci(5));

//n = 5
/*
fibonaci(4) + fibonaci(3)
fibonaci(3) + fibonaci(2) + fibonaci(2) + fibonaci(1)
fibonaci(2) + fibonaci(1) + 1 + 1 + 1
1 + 1 + 1 + 1 + 1 = 5
*/
