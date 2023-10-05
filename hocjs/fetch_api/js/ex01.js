/*
Client <=> Server
- Lấy dữ liệu từ Server để trả về Client (Render lên giao diện)
- Đẩy dữ liệu từ Client lên Server

HTTP Request => Server => HTTP Response

API = Application Programming Interface

Giao diện lập trình ứng dụng

- Giao tiếp giữa Client với Server
- Giao tiếp giữa Server với Server
- Giao tiếp giữa phần mềm với hệ điều hành
- Giao tiếp giữa chương trình với các hàm trong thư viện / framework

WEB API => Chuẩn thiết kế API => RESTFul API

Những quy tắc của chuẩn RESTFul

- URL: Base Server + resource (resource sẽ có quy tắc đặt tên)
=> ví dụ: https://api.fullstack.edu.vn/users
- HTTP METHOD:
+ GET
+ POST
+ PUT
+ PATCH
+ DELETE
- HTTP Method + resource => Endpoint

GET /users => Lấy danh sách user
POST /users => Thêm mới user
GET /users/{id} => Lấy thông tin 1 user
PUT /users/{id} => Sửa thông tin 1 user

- Response Code
- Response Body => Kiểu JSON

Làm thế nào để có Server API

- Tự viết
- Sử dụng các dịch Mockup API (Fake API)
- Sử dụng thư viện Mockup API

Làm thế nào để gọi API

- XMLHttpRequest => Không trả về promise
- fetch -> Trả về promise
- Thư viện: axios, jquery ajax
*/

const serverApi = `http://localhost:3000`;

// fetch(`${serverApi}/users`)
//   .then((response) => {
//     //   console.log(response);
//     return response.json(); //response.text()
//   })
//   .then((data) => {
//     const body = document.body;
//     body.innerHTML = data.map(({ name }) => `<h2>${name}</h2>`).join("");
//   });

const getUsers = async () => {
  const response = await fetch(`${serverApi}/users`);
  const users = await response.json();
  console.log(users);
};

// getUsers();

const getUser = async (id) => {
  const response = await fetch(`${serverApi}/users/${id}`);
  const user = await response.json();
  console.log(user);
};

// getUser(2);

/*
POST => Thêm mới
PUT => Update, ghi đè
PATCH => Update, không ghi đè
DELETE => Xóa
*/

const postUser = async (data) => {
  //data là object
  /*
  - URL
  - METHOD = POST
  - Headers: Content-Type
  - Body 
  */
  const dataEncoded = new URLSearchParams(data).toString();
  //=> Chuyển về dạng key1=value1&key2=value2...
  const response = await fetch(`${serverApi}/users`, {
    method: "POST",
    headers: {
      // "Content-Type": "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    // body: JSON.stringify(data),
    body: dataEncoded,
  });
  console.log(response);
};

// postUser({
//   name: "User 7",
//   email: "user7@gmail.com",
// });

const updateUser = async (data, id) => {
  const response = await fetch(`${serverApi}/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(response);
};

// updateUser(
//   {
//     name: "User 11",
//   },
//   1,
// );

const deleteUser = async (id) => {
  const response = await fetch(`${serverApi}/users/${id}`, {
    method: "DELETE",
  });
  console.log(response);
};

// deleteUser(1);
