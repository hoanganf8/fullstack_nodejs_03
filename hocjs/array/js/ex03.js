console.log(Array.prototype);

var users = ["An", "Tâm", "Dũng", "Hùng", "Tâm"];

//1. fill() => Cập nhật tất cả các phần tử của mảng thành 1 giá trị

// users.fill("F8");

//2. forEach(callback) => Duyệt qua từng phần tử và trả về element, index trong callback

// users.forEach(function (user, index) {
//   console.log(user, index);
// });

//3. map(callback)
/*
- Duyệt qua từng phần tử trong mảng, trả về element, index trong callback
- Trả về 1 mảng mới chính là return của callback
- Số lượng phần tử của mảng mới bằng số lượng phần tử của mảng ban đầu
*/
// var newArr = users.map(function (user, index) {
//   console.log(user, index);
//   return `<h3>${index} - ${user}</h3>`;
// });
// console.log(newArr);

//4. some(callback)
/*
- Giá trị của hàm some là true/false 
- Trả về true nếu: Có ít nhất 1 lần lặp return true
- Trả về false nếu: Tất cả các lần lặp không phải return true
- Vòng lặp sẽ chạy tới khi nào có return true sẽ dừng
*/
// var numbers = [1, 2, 3, 5, 7, 9];
// //=> Kiểm tra trong mảng numbers có số chẵn không?
// var check = numbers.some(function (number) {
//   if (number % 2 === 0) {
//     return true;
//   }
// });
// console.log(check);

/*
5. every(callback)
- Trả về true/false 
- Trả về true nếu, tất cả các lần lặp return true
- Trả về false nếu, có ít nhất 1 lần lặp không return true
*/
// var numbers = [2, 3, 6, 8, 10];
// //=> Kiểm tra mảng trên có phải tất cả đều là số chẵn không?
// var check = numbers.every(function (number) {
//   if (number % 2 === 0) {
//     return true;
//   }
// });
// console.log(check);

/*
6. filter(callback)
- Trả về 1 mảng mới
- Mảng mới chính là phần tử của mảng cũ mà được return true
- Nếu return không phải true/false => Áp dụng truthy và falsy
*/
// var newArr = users.filter(function (user) {
//   if (user === "An" || user === "Hùng") {
//     return true;
//   }
// });
// console.log(newArr);

// var customers = [
//   "Nguyễn Dương",
//   "Trần Xuân Bách",
//   "Nguyễn Hoàng Anh",
//   "Dương Đức Hiệp",
//   "Đỗ Văn Khoa",
//   "Tạ Hoàng An",
// ];
// var keyword = "hoàng";

// //Tìm trong mảng có tên khách hàng nào chứa từ khóa trả về 1 mảng
// var result = customers.filter(function (customer) {
//   return customer.toLowerCase().includes(keyword.toLowerCase());
// });
// console.log(result);

/*
7. find(callback)
Cách hoạt động giống filter nhưng chỉ trả về 1 phần tử đầu tiên

8. findLast(callbac)
Cách hoạt động giống filter nhưng chỉ trả về 1 phần tử cuối cùng

9. findIndex(callback)
Trả về index đầu tiên

10. findLastIndex(callback)
Trả về index cuối cùng
*/

// var customers = [
//   "Nguyễn Dương",
//   "Trần Xuân Bách",
//   "Nguyễn Hoàng Anh",
//   "Dương Đức Hiệp",
//   "Đỗ Văn Khoa",
//   "Tạ Hoàng An",
// ];
// var keyword = "hoàng";

// //Tìm trong mảng có tên khách hàng nào chứa từ khóa trả về 1 mảng
// var result = customers.findLastIndex(function (customer) {
//   return customer.toLowerCase().includes(keyword.toLowerCase());
// });
// console.log(result);

var users = [
  ["Hoàng An", "hoangan.web@gmail.com", 31],
  ["Nguyễn Dương", "duong@gmail.com", 19],
  ["Trần Xuân Bách", "bach@gmail.com", 25],
];

//Yêu cầu: Tăng thêm 2 tuổi cho user có email là duong@gmail.com
var newArr = users.map(function (user) {
  if (user[1] === "duong@gmail.com") {
    user[2] += 2;
  }

  return user;
});

console.log(newArr);
