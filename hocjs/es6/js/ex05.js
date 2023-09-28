//Classes -> Định nghĩa 1 object

class Person {
  //Phương thức khởi tạo
  // -> Chạy đầu tiên khi object được khởi tạo
  constructor(name, email, age) {
    // console.log("Constructor của class cha");
    //Định nghĩa các thuộc tính
    this.name = name;
    this.email = email;
    this.age = age;
  }

  //Định nghĩa các phương thức
  getName() {
    return this.name;
  }

  getEmail = function () {
    return this.email;
  };

  getAge = () => {
    return this.age;
  };
}

class Girl extends Person {
  constructor(name, email, age, address) {
    // console.log("Constructor của class con");
    super(name, email, age);
    this.address = address;
  }
  getInfo() {
    return `
        - Name: ${this.getName()}
        - Email: ${this.getEmail()}
        - Age: ${this.getAge()}
        - Address: ${this.address}
        `;
  }
}

const girl = new Girl("Hoàng An", "hoangan.web@gmail.com", 32, "Hà Nội");
// console.log(girl.getInfo());

//Tạo object
// const person = new Person("Hoàng An", "hoangan.web@gmail.com", 31);
// console.log(person);

//Áp dụng vào việc customElements
customElements.define(
  "hello-world",
  class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerText = `Hello F8`;
    }
  },
);

//Thuộc tính, phương thức tĩnh (static)
/*
Ví dụ: Array.isArray(), Math.PI
*/

class User {
  constructor() {
    //Thuộc tính non-static
    this.name = "Hoàng An";
    this.email = "hoangan.web@gmail.com";
    console.log("Constructor");
  }

  //Phương thức non-static
  getName() {
    // console.log(this);

    // console.log(this.constructor.isUser());
    return this.name;
  }

  //Thuộc tính static
  static age = 31;

  //Phương thức static
  static isUser() {
    // console.log(this);
    const _this = new this();
    console.log(_this.getName());
    return "Tôi là user";
  }
}

console.log(User.isUser());
// console.log(User.age);

// const user = new User();
// console.log(user.getName());
