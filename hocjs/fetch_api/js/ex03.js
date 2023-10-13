/*
1. Authentication 
- Xác thực
- Biết bạn là ai?

Các loại Authentication
- Session Based Authentication
- Token Based Authentication

2. Authorization
- Ủy quyền
- Cho phép bạn làm gì
*/
import { client } from "./client.js";
client.setUrl("https://api.escuelajs.co/api/v1");

const handleLogin = async (data) => {
  const { data: tokens } = await client.post("/auth/login", data);
  console.log(tokens);
};

handleLogin({
  email: "john@mail.com",
  password: "changeme",
});
