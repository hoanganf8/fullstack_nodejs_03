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

Request (Header Token) -> Server -> Response Data
*/
import { client } from "./client.js";
import { requestRefresh } from "./token.js";
client.setUrl("https://api.escuelajs.co/api/v1");

const app = {
  render: function () {
    const root = document.querySelector("#root");
    if (this.isLogin()) {
      root.innerHTML = `<div class="container py-3">
        <h2 class="text-center">Chào mừng bạn đã quay trở lại</h2>
        <hr/>
        <ul class="list-unstyled d-flex gap-3 profile">
          <li>Chào bạn: <b class="name">Loading...</b></li>
          <li><a href="#" class="logout">Đăng xuất</a></li>
        </ul>
      </div>`;
      const profileName = document.querySelector(".profile .name");
      this.getProfile(profileName);
      this.eventLogout();
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
    if (localStorage.getItem("login_tokens")) {
      return true;
    }
    return false;
  },
  handleLogin: async function (data, msg) {
    msg.innerText = "";
    this.addLoading();
    const { data: tokens, response } = await client.post("/auth/login", data);
    this.removeLoading();
    if (!response.ok) {
      msg.innerText = "Email hoặc mật khẩu không chính xác";
    } else {
      //Nếu thành công -> Lưu token vào Storage
      localStorage.setItem("login_tokens", JSON.stringify(tokens));
      this.render();
    }
  },
  getProfile: async function (el) {
    let loginTokens = localStorage.getItem("login_tokens");
    loginTokens = JSON.parse(loginTokens);

    const { access_token: accessToken, refresh_token: refreshToken } =
      loginTokens;

    //Thêm token vào request header
    client.setToken(accessToken);
    const { response, data } = await client.get("/auth/profile");

    if (response.ok) {
      //Token hợp lệ
      el.innerText = data.name;
    } else {
      //Gọi request refresh token
      const newToken = await requestRefresh(refreshToken);
      //Không lấy được token mới -> Đăng xuất
      if (!newToken) {
        //Xử lý logout
        this.handleLogout();
      } else {
        //Cập nhật token mới vào localStorage
        localStorage.setItem("login_tokens", JSON.stringify(newToken));

        //Render
        this.render();
      }
    }
  },
  handleLogout: function () {
    localStorage.removeItem("login_tokens");
    this.render();
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
  eventLogout: function () {
    const logout = document.querySelector(".profile .logout");
    logout.addEventListener("click", (e) => {
      e.preventDefault();
      this.handleLogout();
    });
  },
};

app.render();

/*
accessToken -> Lấy Data
refreshToken -> Cấp lại accessToken mới

1. Danh sách khóa học -> token chưa hết hạn

2. Lấy danh sách bài viết -> Token hết hạn

3. Lấy danh sách bình luận -> Token hết hạn

Khi logout -> Gửi request logout lên Server
*/

let isExpired = false; //Request check expire
let token = "old";
let requestRefreshPromise = null;

const requestRefreshApi = () => {
  if (!requestRefreshPromise) {
    console.log("Request refresh token");
    requestRefreshPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("New Token");
      }, 1000);
    });
  }

  return requestRefreshPromise;
};
const requestApi = async (resource) => {
  if (resource === "Khóa học Pro") {
    isExpired = true;
  }
  if (isExpired) {
    const newToken = await requestRefreshApi();
    token = newToken;
    isExpired = false;
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(resource + `Token: ${token}`);
    }, 1000);
  });
};

(async () => {
  const res1 = await requestApi("Slider");
  console.log(res1);
})();

(async () => {
  const res2 = await requestApi("Khóa học Pro");
  console.log(res2);
})();

(async () => {
  const res3 = await requestApi("Khóa học Free");
  console.log(res3);
})();

const getBanner = async () => {
  client.setUrl("https://api-gateway.fullstack.edu.vn/api");
  const { data } = await client.get("/banners?placement=home&type=slideshow");
  console.log(data);
};

getBanner();
