"use strict"; //Bật chế độ nghiêm ngặt cho cả file

// a = 10;
// console.log(a);

// function getMsg(msg) {
//   console.log(msg);
// }

// getMsg();

//JavaScript Hoisting
/*
- Cơ chế mặc định của Javascript
- Tự động đẩy khai báo biến và hàm lên trước đoạn code thực thi
- Chỉ đẩy phần khai báo, không đẩy giá trị
- Với function: Chỉ áp dụng với function declaration (Không áp dụng với function expression)
- Không áp dụng từ khóa const, let
*/

// a = 10;
// console.log(a);
// var a;

// console.log(a);
// var a = 10;

getMessage();

function getMessage() {
  console.log("Hello F8");
}
