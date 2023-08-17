// var user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   getName: function () {
//     return this.name;
//   },
// };

// var customer = {
//   name: "Nguyễn Dương",
//   email: "duongnguyen@gmail.com",
//   getName: function () {
//     return this.name;
//   },
// };

//=> Tạo ra 1 bản thiết kế cho object
//Trong js => Function Constructor (Hàm tạo)
//Tên hàm tạo: Viết theo cú pháp PascalCase
var Person = function (name, email) {
  this.name = name;
  this.email = email;
  this.getName = function () {
    return this.name;
  };
};

Person.prototype.message = "F8 - Fullstack";

//Tạo đối tượng từ hàm tạo
var person = new Person("Hoàng An", "hoangan.web@gmail.com");
console.log(person);

var user = new Person("Nguyễn Dương", "duongnguyen@gmail.com");
console.log(user);

// console.log(person.message);
// console.log(user.message);

// Array.prototype.first = function () {
//   return this[0];
// };

// var a = ["An", "Dương", "Vương"];
// console.log(a.first());

// String.prototype.end = function () {
//   return this.slice(-1);
// };

// var b = "Tạ Hoàng An";
// console.log(b.end());

//Kiểm tra object thuộc hàm tạo nào?
console.log(person.constructor.name);

var a = 10;
// console.log(a.constructor.name);

// var b = undefined;
// console.log(b.constructor.name);

if (a === 0 || (a && a.constructor.name === "Number")) {
  console.log("Number");
}

//Xây dựng 1 hàm nội bộ từ hàm tạo
// var getMsg = function () {
//   console.log("Xin chào F8");
// };
// getMsg();

Person.isPerson = function (variable) {
  return variable && variable.constructor.name === "Person";
};

if (Person.isPerson(person)) {
  console.log("Đây là person");
} else {
  console.log("Không phải person");
}
