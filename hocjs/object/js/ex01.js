/*
Object = Đối tượng
- Object Literal (Đối tượng nguyên bản)
- Function Constructor (Hàm tạo)

Thành phần của đối tượng

- Thuộc tính: Đặc điểm, tính chất (Biến)
- Phương thức: Hành động (Hàm)
*/
var user = {
  //key: value
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  age: 31,
  getName: function () {
    return "Hoàng An F8";
  },
}; //Object Literal

//Thêm key mới cho object
user.country = "Việt Nam";
user["address"] = "Cầu Giấy - HN";

//Sửa giá trị của key trong object
user.email = "hoangan@fullstack.edu.vn";

//Xóa key trong Object
delete user.age;

//Truy cập key trong object
// console.log(user.name);
// console.log(user["email"]);

console.log(user);

//Lấy danh sách key trong object
// for (var key in user) {
//   //   console.log(key);
//   console.log(user[key]);
// }

// Object.keys(user).forEach(function (key) {
//   console.log(user[key]);
// });

//Kiểm tra 1 biến có phải object hay không?
// var a = {};

// if (typeof a === "object" && !Array.isArray(a) && a !== null) {
//   console.log("Là Object");
// } else {
//   console.log("Không phải object");
// }

// var customer = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   getName: function () {
//     return this.name;
//   },

//   getEmail: function () {
//     return this.email;
//   },

//   getInfo: function () {
//     // console.log(this);
//     return `
//     - Name: ${this.getName()}
//     - Email: ${this.getEmail()}
//     `;
//   },
// };

// console.log(customer.getInfo());

var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  jobs: {
    name: "Giảng viên",
    salary: 5000000,
    currency: "vnđ",
    per: "Tháng",
    students: [
      {
        id: 1,
        name: "HV 1",
      },
      {
        id: 2,
        name: "HV 2",
      },
      {
        id: 3,
        name: "HV 3",
      },
    ],
  },
};

// console.log(user.name);
// console.log(user.jobs.name);
// console.log(user.jobs.students[0].name);

var users = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  getInfo: function () {
    var current = this;
    return {
      getName: function () {
        return current.name;
      },
    };
  },
};
console.log(users.getInfo().getName());
