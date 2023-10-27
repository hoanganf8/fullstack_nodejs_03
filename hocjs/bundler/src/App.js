import moment from "moment"; //Import node_modules
import "./Assets/Style.css";
import "./Assets/Style.scss";
import config from "./Config.json";
import img01 from "./Assets/Images/img01.jpg";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
export const App = () => {
  const { PAGE_LIMIT, SERVER_API } = config;
  console.log(process.env.SERVER_API);
  console.log(process.env.MAIL_SERVER);
  console.log(process.env.NODE_ENV); //Lấy ra tên môi trường
  return `
  ${Header()}
  <h1>Trang chủ</h1>
  <h2>${moment().format("DD/MM/YYYY HH:mm:ss")}</h2>
  <h2>${SERVER_API} - ${PAGE_LIMIT}</h2>
  <div class="content">
    <h2>Học JS không khó</h2>
    <a href="#">Đăng ký khóa học</a>
  </div>
  ${Footer()}
  `;
};
