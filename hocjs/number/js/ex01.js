//Number: Kiểu dữ liệu nguyên thủy
console.log([Number]);

var a = 10.5;
console.log(a, typeof a);

//Kiểm tra 1 biến có phải là số hay không?
if (typeof a === "number") {
  console.log("Đây là số");
  //Kiểm tra số nguyên
  if (Number.isInteger(a)) {
    console.log("Đây là số nguyên");
  } else {
    console.log("Đây không phải số nguyên");
  }
} else {
  console.log("Không phải là số");
}

//Số NaN (Not A Number)
/*
- Ép kiểu thất bại
- Tính toán các biểu thức số học mà có 1 toán hạng mang giá trị NaN hoặc do quá trình tự động ép kiểu khi thực hiện phép toán
*/
// var a = NaN;
// console.log(a, typeof a);

var a = "F8";
var b = 10;
var c = a - b; //-, *, /, **, %, ++, --

// if (!Number.isNaN(c)) {
//   console.log(c);
// } else {
//   console.log("Không tính toán được");
// }

// a++;
// console.log(a);
// a = +a;
// console.log(a);

//Số Infinity
var a = 1000 ** 1000;
console.log(a);

//Kiểm tra số Infinity

// if (a === Infinity) {
//   console.log("Đây là số Infinity");
// }

// var a = 10;
// if (typeof a === "number" && !Number.isNaN(a) && a !== Infinity) {
//   console.log("Đây là số");
// }

//Ép kiểu
var a = "10.5a";
//=> Ép sang kiểu số nguyên
// a = Number.parseInt(a);
// console.log(a);

//=> Ép sang kiểu số thực
// a = Number.parseFloat(a);

//=> Ép kiểu số (Số nguyên, số thực)
// a = Number(a);
a = +a;
console.log(a);

//Bài tập: Tính tổng các số chẵn của mảng sau
var numbers = [
  5,
  2,
  1,
  9,
  8,
  4,
  "10",
  NaN,
  Infinity,
  -Infinity,
  undefined,
  null,
  "20abc",
  true,
  false,
  "",
];
var total = 0;
numbers.forEach(function (number) {
  number = +number;
  if (!Number.isNaN(number) && number % 2 === 0) {
    total += number;
  }
});
console.log(total);

//toFixed() => Lấy số chữ số phần thập phân
//=> Trả về 1 chuỗi
var a = 10.567;
console.log(a);
a = a.toFixed(2);
console.log(a);

//toString() => Chuyển số thành chuỗi
a = 123;
a = a.toString();
console.log(a);

//Định dạng số
var price = 1234000;
price = price.toLocaleString("vi", {
  style: "currency",
  currency: "EUR",
});
// console.log(price);

// console.log(Math);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 1000));
