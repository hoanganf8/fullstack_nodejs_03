// var a = {
//   name: "Đào tạo lập trình",
//   email: "hoangan.web@gmail.com",
// };

// var b = {
//   teacher: "Hoàng An",
//   salary: 5000000,
// };

//Nối object b vào object a
//Yêu cầu: Không dùng hàm có sẵn, es6 trở lên

// for (var key in b) {
//   //   console.log(b[key]);
//   a[key] = b[key];
// }

// console.log(a);

// Object.keys(b).forEach(function (key) {
//   a[key] = b[key];
// });
// console.log(a);

//Bài tập 2:
var query = {
  name: "Hoàng An",
  keyword: "Fullstack",
  category: 1,
};

//Chuyển đổi object trên thành dạng query string
//name=Hoàng+An&keyword=Fullstack&category=1

//Sử dụng thêm hàm: Object.entries()
// console.log(Object.entries(query));
console.log(Object.entries(query));
var queryString = Object.entries(query)
  .map(function (item) {
    return item.join("=");
  })
  .join("&")
  .replaceAll(" ", "+");
console.log(queryString);

//Object.assign(target, source)

// var a = {
//   name: "Đào tạo lập trình",
//   email: "hoangan.web@gmail.com",
// };

// var b = {
//   teacher: "Hoàng An",
//   salary: 5000000,
// };

// var result = Object.assign(a, b);
// console.log(a);
// console.log(result);

//Object.create(null) => Tạo object không có prototype
// var a = Object.create(null);
// console.log(a);

// var a = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };

// // var b = a;
// // var b = Object.assign({}, a);
// // var b = { ...a };
// var b = JSON.parse(JSON.stringify(a));

// b.name = "Hoàng An F8";
// console.log(a);
// console.log(b);

var a = ["Hoàng An", "hoangan.web@gmail.com"];
// var b = a;
// var b = a.map(function (item) {
//   return item;
// });
// var b = [...a];
var b = JSON.parse(JSON.stringify(a));

b[0] = "Hoàng An F8";

// console.log(a);
// console.log(b);

// console.log([] === []);
// console.log({} === {});
// console.log(function () {} === function () {})

//Optional Chaining (?.)

//1. Optional Chaining với thuộc tính
// var a = {};
// console.log(a?.name);

// var fullname = ["An"];
// if (fullname?.length) {
//   console.log("ok");
// }

//2. Optional Chaining với phương thức
// var a = {};
// console.log(a.getName?.());

var fullname = "An";
if (fullname?.length) {
  fullname.forEach?.(function (item) {
    console.log(item);
  });
}
