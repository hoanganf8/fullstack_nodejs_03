import express from "express";
const router = express.Router();

//users/courses
router.get("/", (req, res) => {
  res.send("<h1>Danh sách khóa học</h1>");
});

router.get("/active", (req, res) => {
  res.send("<h1>Danh sách khóa học kích hoạt</h1>");
});

router.get("/pending", (req, res) => {
  res.send("<h1>Danh sách khóa học chờ kích hoạt</h1>");
});

export default router;
