import express from "express";
import coursesRouter from "./courses.js";
import authMiddleware from "../middlewares/auth.middleware.js";
const router = express.Router();

router.use("/courses", coursesRouter);

// router.use(authMiddleware);

//users
router.get("/", (req, res) => {
  const { status, keyword } = req.query;
  // const userAgent = req.headers["user-agent"];
  const userAgent = req.get("user-agent");
  const email = req.cookies.email;
  res.cookie("email", "hoangan@fullstack.edu.vn", {
    maxAge: 86400,
    path: "/",
    httpOnly: true,
  });
  res.set("abc", "xyz");
  res.send(`<h1>Danh sách người dùng</h1>
  <h2>Status: ${status}</h2>
  <h2>Keyword: ${keyword}</h2>
  <h2>User Agent: ${userAgent}</h2>
  <h2>Email: ${email}</h2>
  `);
});

//users/add
router.get("/add", (req, res) => {
  res.send("<h1>Thêm người dùng</h1>");
});

//users/active
router.get("/active/:id", (req, res) => {
  const id = req.params.id;
  res.send("<h1>Kích hoạt người dùng: " + id + "</h1>");
});

export default router;
