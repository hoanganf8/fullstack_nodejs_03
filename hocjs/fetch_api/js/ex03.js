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

// const handleLogin = async (data) => {
//   const { data: tokens } = await client.post("/auth/login", data);
//   console.log(tokens);
// };

// // handleLogin({
// //   email: "john@mail.com",
// //   password: "changeme",
// // });

const app = {
  render: function () {
    const root = document.querySelector("#root");
    if (this.isLogin()) {
      root.innerHTML = `<div class="container py-3">
        <h2 class="text-center">Chào mừng bạn đã quay trở lại</h2>
        <hr/>
        <ul class="list-unstyled d-flex gap-3">
          <li>Chào bạn: <b>Hoàng An</b></li>
          <li><a href="#">Đăng xuất</a></li>
        </ul>
      </div>`;
    } else {
      root.innerHTML = `<div class="container py-3">
      <div class="row justify-content-center">
        <div class="col-7">
          <h2 class="text-center">Đăng nhập</h2>
          <form class="login">
            <div class="mb-3">
              <label for="">Email</label>
              <input type="email" class="form-control email" placeholder="Email...">
            </div>
            <div class="mb-3">
              <label for="">Mật khẩu</label>
              <input type="password" class="form-control password" placeholder="Mật khẩu...">
            </div>
            <div class="d-grid">
              <button type="submit" class="btn btn-primary">Đăng nhập</button>
            </div>
          </form>
          <div class="msg text-danger"></div>
        </div>
      </div>
    </div>`;

      this.eventLogin();
    }
  },
  isLogin: function () {
    return false;
  },
  handleLogin: async function (data, msg) {
    msg.innerText = "";
    this.addLoading();
    const { data: tokens, response } = await client.post("/auth/login", data);
    this.removeLoading();
    if (!response.ok) {
      msg.innerText = "Email hoặc mật khẩu không chính xác";
    }
  },
  addLoading: function () {
    const form = document.querySelector(".login");
    const btn = form.querySelector(".btn");

    btn.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Loading`;
    btn.disabled = true;
  },
  removeLoading: function () {
    const form = document.querySelector(".login");
    const btn = form.querySelector(".btn");
    btn.innerHTML = `Đăng nhập`;
    btn.disabled = false;
  },
  eventLogin: function () {
    const form = document.querySelector(".login");
    const msg = document.querySelector(".msg");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailEl = e.target.querySelector(".email");
      const passwordEl = e.target.querySelector(".password");
      const email = emailEl.value;
      const password = passwordEl.value;
      this.handleLogin({ email, password }, msg);
    });
  },
};

app.render();
