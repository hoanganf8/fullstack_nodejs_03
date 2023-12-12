import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import session from "express-session";
import bodyParser from "body-parser";
import routerIndex from "./routes/index.js";
import routerUsers from "./routes/users.js";
import authMiddleware from "./middlewares/auth.middleware.js";
import cookieParser from "cookie-parser";
const app = express();

//Khởi tạo session
app.use(
  session({
    secret: "f8",
    name: "f8_session_id",
  }),
);

app.use(cookieParser()); //Đọc cookie từ phía client
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//Static file
app.use(express.static("public"));

app.set("view engine", "ejs"); //Thiết lập template engine sử dụng
app.set("views", "./views"); //Thiết lập đường dẫn tới folder views
app.use(expressEjsLayouts);
app.set("layout", "layouts/layout"); //Đổi layout mặc định

//Router
app.use(routerIndex);
app.use("/users", routerUsers);
app.use((req, res) => {
  res.send("<h1>Page Not Found</h1>");
});

const port = 8080;
const hostname = "localhost";
app.listen(port, hostname, () => {
  console.log("Đang chạy server với port: " + port);
});
