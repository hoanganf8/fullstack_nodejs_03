/*
Toán tử - Biểu thức

Biểu thức = Toán hạng + Toán tử

var s = a + b

1. Toán tử số học

+, -, *, /, % (Chia lấy dư), ** (Lũy thừa)

++, -- => Phép tăng, phép giảm
*/

// var a = "10.5"; //Chuỗi số
// var b = 20;

// //Ép kiểu: parseInt(), parseFloat()
// // var c = parseInt(a) + parseInt(b);
// var c = +a + +b;
// console.log(c);

// var a = 10;
// var b = 3;
// var c = a ** b; //a ^ b
// console.log(c);

// var count = 1;
//   s;
// count++; //count = count + 1
// ++count; //count = count + 1
// console.log(count);

// s = ++count;
// console.log(`S = ${s}`);
// console.log(`Count = ${count}`);

// var count = 1;
// var total = count++ + ++count;
// console.log(total);

/*
2. Toán tử logic

>, <, >=, <=, ==, ===, !=, !==

=> Trả về kiểu boolean (true, false)
*/

// var a = "10";
// var b = 10;
// var c = +a === +b;
// console.log(c);

/*
3. Toán tử gán (=)

*/

// var a = 10;
// // a = a + 5;
// a += 5; //a = a + 5;
// a -= 5; //a = a - 5;
// a *= 5; //a = a * 5;
// a /= 5; //a = a / 5;
// a %= 2; //a = a % 5
// console.log(a);

// var str = "F8";
// str += " F8";
// str += " F8";
// str += " F8";
// str += " F8";
// console.log(str);

/*
4. Toán tử lý luận (kết hợp)
&& => Và
|| => Hoặc
! => Phủ định
*/

// var a = 10;
// // var b = a >= 5 && a <= 10;
// // var b = a < 0 || a >= 5;
// var b = !(a < 0 || a >= 5);
// // b = !b;
// console.log(b);

/*
5. Toán tử 3 ngôi

bieuthuclogic ? giatridung : giatrisai
*/

// var a = 10;
// var b = a >= 10 ? "F8" : undefined;
// console.log(b);
// document.write(`${a >= 10 ? "F8" : ""}`);

// var a = 10;

// var b = 1 + 2 + 3 + (a >= 5 ? 10 : 20) + 4 + 5;

// console.log(b);

/*
6. Toán tử nullish (??)
*/

// var a = undefined;
// var b = a ?? "F8"; //Check !== null && !== undefined
// console.log(b);

//=> Bài tập: Chuyển toán tử nullish thành toán tử 3 ngôi

// var b = a !== undefined && a !== null ? a : "F8";

// console.log(b);

// var a = 0;
// var b = a ? "F8" : "Hoàng An";
// console.log(b);
/*
Tự động chuyển về boolean trong trường hợp phải dùng để so sánh

Nếu tự chuyển về false => Falsy
0, "", false, undefined, null, NaN

Nếu mà tự chuyển về true => Truthy
Các trường hợp còn lại
*/

/*
7. Toán tử &&
*/

// var a = "Hoàng An";
// var b = a && "F8";
// console.log(b);

/*
8. Toán tử ||
*/
var a = 0;
var b = a || "F8"; //Đừng nhầm lẫn với nullish
console.log(b);
