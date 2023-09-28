//Spread Operator

const oldObj = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};

const newObj = { course: "Fullstack", ...oldObj };

console.log(newObj);

const oldArr = ["Hoàng An", "hoangan.web@gmail.com"];

const newArr = ["Fullstack", ...oldArr];

console.log(newArr);

const getTotal = (a, b) => {
  console.log(a, b);
};

const values = [10, 20];

getTotal(...values);

//Enhance Object Literal

// const name = "Hoàng An";
// const email = "hoangan.web@gmail.com";
// const age = undefined;

// const user = {
//   name,
//   email,
//   age,
// };

// console.log(user);

const result = {
  sum(a, b) {
    return a + b;
  },

  div(a, b) {
    return a / b;
  },
};

console.log(result);
console.log(result.sum(10, 20));
