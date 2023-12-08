import express from "express";
const router = express.Router();
router.get("/", (req, res) => {
  res.send("<h1>Học Express không khó</h1>");
});

router.get("/san-pham", (req, res) => {
  res.send("<h1>Danh sách sản phẩm</h1>");
});

router.get("/dang-nhap", (req, res) => {
  res.send("<h1>Đăng nhập</h1>");
});

export default router;
