/*
2 loại vòng lặp
1. Vòng lặp với số lần lặp xác định trước
for

for (bienchay; dieukiendung; buocnhay) {
    Nội dung
}

2. Vòng lặp với số lần lặp không xác định trước
while, do while
*/

// for (var i = 1; i <= 10; i++) {
//   console.log("Lần lặp thứ: " + i);
// }

// for (var i = 10; i >= 1; i--) {
//   console.log("Lần lặp thứ: " + i);
// }

// for (var i = 1; i <= 5; i++) {
//   for (var j = 1; j <= 10; j++) {
//     console.log(`i = ${i} - j = ${j}`);
//   }
// }

//Bài 1: S = 1 + 2 + 3 + ... + N

var n = 10;
var s = 0;
for (var i = 1; i <= n; i++) {
  s += i;
}

console.log("Tổng = " + s);

//Bài 2: Tính giá trị biểu thức
//Total = 1 + 1*2 + 1*2*3 + ... + 1*2*3*...*n

var n = 3;
var total = 0;
var subTotal = 1;
for (var i = 1; i <= n; i++) {
  subTotal *= i;
  total += subTotal;
}

console.log(total);

/*
i = 1 => subTotal = 1 * 1 => total = 0 + 1 * 1
i = 2 => subTotal = 1 * 1 * 2 => total = 0 + 1 * 1 + 1 * 1 * 2
i = 3 => subTotal = 1 * 1 * 2 * 3 => total = 0 + 1 * 1 + 1 * 1 * 2 + 1 * 1 * 2 * 3
=> Rút gọn: 1 + 1 * 2 + 1 * 2 * 3
*/

/*
Bài tập 3: Vẽ tam giác *

*
* * 
* * *
* * * *
* * * * *

n = số dòng = 5
*/

var n = 10;

for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= i; j++) {
    document.write("* ");
  }
  document.write("<br/>");
}
