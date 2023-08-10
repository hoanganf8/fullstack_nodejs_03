//Khai báo
var users = ["An", "Tâm", "Dũng", "Hùng"];
// var users = new Array("An", "Tâm", "Dũng", "Hùng");
// var users = []; //mảng rỗng

// console.log(Array.prototype);
// console.log([Array]);

//Những phương thức, thuộc tính build trực tiếp từ hàm tạo => Array.tenPhuongThuc()

//Kiểm tra 1 biến có phải là mảng hay không?
// if (Array.isArray(users)) {
//   console.log("Đây là mảng");
// } else {
//   console.log("Đây không phải mảng");
// }

//Lấy số phần tử của mảng
// console.log(users.length);

//1. Thêm phần tử mới vào mảng
// users[users.length] = "Mai";
// users[users.length] = "Quý";

//2. Truy cập vào 1 phần tử;

// console.log(users[1]);

//3. Sửa 1 phần tử
// users[1] = "Văn Quân";

//4. Duyệt mảng

// for (var i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

// for (var index in users) {
//   console.log(users[index]);
// }

// for (var user of users) {
//   console.log(user);
// }

//5. Xóa mảng

// var indexDel = 1;
// var results = [];
// for (var index in users) {
//   if (+indexDel === +index) {
//     continue;
//   }
//   results[results.length] = users[index];
// }

// console.log(users);
// console.log(results);

//Bài tập: Thêm 1 phần tử vào đầu mảng
var value = "Quý";
var newArr = [];

newArr[newArr.length] = value;

for (var index in users) {
  newArr[newArr.length] = users[index];
}
console.log(users);
console.log(newArr);
