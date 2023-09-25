/*
Biến

let, const 
-> Chỉ sử dụng trong phạm vi đã khai báo và các phạm vi con của nó
-> Trong 1 scope chỉ được khai báo 1 lần
-> Không có hoisting

let: Thay đổi được

const: Không thay đổi được, gán luôn khi khai báo
*/

// let a = 10;
// a = 20;
// console.log(a);

for (let i = 1; i <= 5; i++) {
  let a = 10;
  if (i === 5) {
    let a = 20;
  }

  console.log(a);
}

// console.log(i);
// console.log(a);

const user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};

// user.name = "F8";
// user = {};

console.log(user);

const getMessage = function () {
  console.log("Hello F8");
};
