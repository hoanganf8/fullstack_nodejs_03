// console.log("Học Back-end dễ hơn Front-End");
/*
Client -> HTTP (Request, Response) -> Server
*/
//Import 1 file, thư viện khác --> Sử dụng lệnh require() --> CommonJs
/*
NodeJS sẽ có sẵn 1 số thư viện không cần cài đặt
- http
- fs
- path
*/
// const http = require("http");
import http from "http";
// const parse = require("url-parse");
import parse from "url-parse";
// const { getName, getEmail } = require("./utils/functions");
import { getName, getEmail } from "./utils/functions.js";
console.log(getName());
console.log(getEmail());
const hostname = "localhost";
const port = 8080;
const server = http.createServer((req, res) => {
  //request: Yêu cầu từ phía client gửi lên
  const url = parse(req.url, true);
  const path = url.pathname;
  const userAgent = req.headers["user-agent"];
  const method = req.method;
  //   console.log(req);
  let content;
  if (path === "/") {
    content = `<h1>Học lập trình Back-End không khó</h1>`;
  } else if (path === "/san-pham") {
    const { status, keyword } = url.query;
    content = `
    <h1>Danh sách sản phẩm</h1>
    <h2>Status: ${status}</h2>
    <h2>Keyword: ${keyword}</h2>
    `;
  } else if (path === "/khoa-hoc") {
    content = `<h1>Danh sách khóa học</h1>`;
  } else {
    content = `<h1>Page not found</h1>`;
  }

  //response: Phản hồi từ server về client
  res.setHeader("abc", "xyz");
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  //   res.statusCode = 404;
  //   res.setHeader("Set-Cookie", "name=hoangan;path=/;max-age=86400;HttpOnly");
  const cookie = req.headers["cookie"];
  //   console.log(cookie);
  res.end(content);
});

server.listen(port, hostname, () => {
  console.log("Server đang chạy với port = " + port);
});
