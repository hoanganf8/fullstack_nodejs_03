// var email = "hoangan@fullstack.edu.vn";

// //Lấy ra username
// var username = email.slice(0, email.indexOf("@"));
// console.log(username);

/*
Bài 2: Kiểm tra 1 chuỗi có được viết hoa hết hay không?
*/
// var fullname = "TẠ HOÀNG An";
// var check = fullname === fullname.toUpperCase();
// console.log(check);

/*
Bài 3: 
var fullname = 'tạ hoàng an';
=> Chuyển họ tên thành dạng tên chuẩn: Tạ Hoàng An
Yêu cầu: Không sử dụng mảng
*/

var fullname = "tạ hoàng an";

//tạ hoàng an => T + ạ Hoàng An
fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);

//Tạ hoàng an

//Tạ + charNext.toUpperCase() + oàng an

//fullname.slice(0, index) + charNext.toUpperCase() + fullname.slice(index+1)

for (var i = 0; i < fullname.length; i++) {
  var char = fullname.charAt(i); //Lấy từng ký tự

  var charNext = fullname.charAt(i + 1); //Lấy ký tự sau dấu khoảng trắng

  if (char === " " && charNext !== " ") {
    var index = i + 1; //Vị trí của ký tự sau dấu khoảng trắng
    fullname =
      fullname.slice(0, index) +
      charNext.toUpperCase() +
      fullname.slice(index + 1);
  }
}

console.log(fullname);
