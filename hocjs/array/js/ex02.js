console.log(Array.prototype);
var users = ["An", "Tâm", "Dũng", "Hùng", "Tâm"];
console.log(users);

//1. at() => Truy cập 1 phần tử theo index
// console.log(users.at(1));

//2. concat(arr1, arr2, arr3,...)
// console.log(users.concat([1, 2, 3], [4, 5, 6]));
// console.log(users.concat("Dương"));

//3. indexOf(value) => Tìm vị trí xuất hiện đầu tiên của phần tử trong mảng
// console.log(users.indexOf("Tâm"));

//4. lastIndexOf(value) => Tìm vị trí xuất hiện cuối cùng của phần tử trong mảng
// console.log(users.lastIndexOf("Tâm"));

//5. includes(value) => Tìm phần tử trong mảng và trả về true/false
// console.log(users.includes("Tâm"));

//6. slice(start, end) => Cắt mảng từ vị trí start đến end và trả về 1 mảng
// console.log(users.slice(1, 3));
// console.log(users.slice(1));
// console.log(users.slice(-2));

//7. join() => Nối mảng thành chuỗi
// console.log(users.join(" | "));

//8. push() => Thêm phần tử vào cuối mảng, thay đổi mảng ban đầu, trả về số lượng phần tử sau khi thêm
// var count = users.push("Dương", "Dương 1", "Dương 2");
// console.log(users);
// console.log(count);

//9. unshift() => Thêm phần tử vào đầu mảng

// var count = users.unshift("Dương", "Dương 1", "Dương 2");
// console.log(users);
// console.log(count);

//10. pop() => Xóa phần tử cuối mảng và trả về giá trị phần tử vừa xóa
// var value = users.pop();
// console.log(users);
// console.log(value);

//11. shift() => Xóa phần tử đầu mảng và trả về giá trị phần tử vừa xóa
// var value = users.shift();
// console.log(users);
// console.log(value);

//12. splice(inde, count) => Xóa count phần tử từ index
// users.splice(1, 2, "A", "B", "C");
// console.log(users);

//13. reverse() => Đảo ngược mảng
// users.reverse();

//14. sort() => Sắp xếp mảng theo thứ tự tăng dần
// users.sort().reverse();
// console.log(users);
// var numbers = [5, 100, 1, 10, 2];
// numbers.sort(function (a, b) {
//   //   return a - b;
//   //   return b - a;
//   if (a < b) {
//     return -1;
//   }
// });
// console.log(numbers);

//Bài 1: Lấy tên của họ và tên
var fullname = "Tạ Hoàng An"; //An
var firstName = fullname.split(" ").slice(-1).join();
// console.log(firstName);

//Bài 2: Sắp xếp danh sách khách hàng tăng dần theo tên
var customers = [
  "Nguyễn Dương",
  "Trần Xuân Bách",
  "Dương Đức Hiệp",
  "Đỗ Văn Khoa",
  "Tạ Hoàng An",
];

var getFirstName = function (fullname) {
  return fullname.split(" ").slice(-1).join();
};

customers.sort(function (a, b) {
  //   console.log(getFirstName(a), getFirstName(b));
  if (getFirstName(b) > getFirstName(a)) {
    return -1;
  }
});
console.log(customers);
