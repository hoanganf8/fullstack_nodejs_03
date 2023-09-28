//rest parameter
const sum = (msg, ...args) => {
  console.log(msg);
  console.log(args);
};

// sum("Sum = ", 5, 10, 15, 20);

//default parameter
const division = (a, b = 1) => {
  console.log(a, b);
};

// division(10);

//Destructuring
// -> Phá vỡ cấu trúc của array, object để truy cập vào các phần tử và gán thành các biến riêng biệt

// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 31,
//   address: "Hà Nội",
//   "shipping-address": "Hồ Chí Minh",
// };

// console.log(user);

// const key = "address";

// const {
//   name: username,
//   email,
//   age = 29,
//   "shipping-address": shippingAddress,
//   [key]: address,
// } = user;
// console.log(username, email, age, shippingAddress, address);

// const { name: username, email, ...rest } = user;
// console.log(username, email);
// console.log(rest);

const user = [
  "Hoàng An",
  "hoangan.web@gmail.com",
  undefined,
  {
    age: 31,
    address: "Hà Nội",
  },
];

// const [username, email, , address] = user;
// console.log(username, email, address);

// const [username, email, ...rest] = user;

// console.log(username, email);
// console.log(rest);

// const [username, email, course = "Fullstack"] = user;
// console.log(username, email, course);

// const [username, email, course = "Fullstack", { age, address }] = user;
// console.log(username, email, course);

// console.log(age, address);

// let a = "An";
// let b = "Dương";

// [a, b] = [b, a];

// console.log(a, b);

const users = [
  {
    id: 1,
    name: "Nguyễn Văn A",
  },
  {
    id: 2,
    name: "Nguyễn Văn B",
  },
  {
    id: 3,
    name: "Nguyễn Văn C",
  },
];

// const getUser = (value) => users.find(({ id }) => id === value);

// console.log(getUser(2));

const html = users.map(({ id, name }) => `<h2>${id} - ${name}</h2>`).join("");
document.body.innerHTML = html;

const getResult = () => [1, 2];

const [value1, value2] = getResult();

console.log(value1, value2);
