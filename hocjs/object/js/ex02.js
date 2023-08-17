//Thêm phương thức vào Prototype

Object.prototype.combine = function (...args) {
  var current = this;

  if (args.length) {
    return args.map(function (key) {
      return current[key];
    });
  }
};

//Thêm thuộc tính vào Prototype
Object.prototype.message = "F8";

var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};

var customer = {
  name: "Nguyễn Dương",
  age: 19,
  position: 1,
};
console.log(user);

// var result1 = user.combine("name", "email");
// console.log(result1);

// var result2 = customer.combine("name", "age", "position");
// console.log(result2);

//Mong muốn: Bất kỳ object nào cũng sử dụng được hàm combine
//=> Kế thừa phương thức, thuộc tính
//=> Định nghĩa thuộc tính, phương thức vào prototype

var a = "F8"; //String
// console.log(String.prototype);
// console.log(a.message);

var b = []; //Array
// console.log(Array.prototype);
// console.log(b.message);

var c = 10; //Number
// console.log(Number.prototype);
// console.log(c.message);

var today = new Date();
console.log(Date.prototype);
console.log(today.message);
