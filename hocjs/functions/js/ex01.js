/*
Hàm (Function): Thể 1 chức năng (Động từ)

1. Hàm không tham số
function tenHam() {
    Nội dung hàm
}

2. Hàm có tham số
function tenHam(thamso1, thamso2,...) {
    Nội dung
}

Tên hàm: 
- Động từ: get, set, make, build,...
- Dùng camelCase

3. Hàm có giá trị trả về và không có giá trị trả về

- Hàm có giá trị trả về: Có từ khóa return
=> Hàm return

- Hàm không có giá trị trả về: Không có giá trị trả về
=> Hàm void

*/

//Định nghĩa hàm
function getMessage(msg, type = "success") {
  console.log("Hoàng An", msg, type);
}

//Gọi hàm
getMessage("F8", "Fullstack");

function sum(a, b) {
  var total = a + b;

  return total;
  //Lưu ý: Khi return đc gọi => Các đoạn code bên dưới return không hoạt động
}

// console.log(sum(10, 20)); //=> giá trị của hàm

// var result = sum(10, 20) + 50;
// console.log(result);

//a / b
function division(a, b) {
  if (b !== 0) {
    var result = a / b;
    //result = Biến cục bộ
    return result;
  }

  return "Không tính được";
}

console.log(division(10, 2));

function getMessage() {
  return msg;
}

function setMessage(value) {
  msg = value;
}

var msg = "Hoàng An F8";
//Biến toàn cục: global variable

setMessage("Fullstack");

console.log(getMessage());
