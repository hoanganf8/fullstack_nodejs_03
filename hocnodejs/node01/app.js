import express from "express";
import routerIndex from "./routes/index.js";
import routerUsers from "./routes/users.js";
import authMiddleware from "./middlewares/auth.middleware.js";
import cookieParser from "cookie-parser";
const app = express();
app.use(cookieParser()); //Đọc cookie từ phía client
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
