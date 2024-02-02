var express = require("express");
var router = express.Router();
const userController = require("../controllers/user.controller");
const { User, Phone, Post, Course } = require("../models/index");
const permission = require("../middlewares/permission.middleware");

/* GET users listing. */
router.get("/", permission("users.read"), userController.index); //users.read
router.get("/add", permission("users.create"), userController.add); //users.create
router.post("/add", permission("users.create"), userController.handleAdd); //users.create
router.get("/edit/:id", permission("users.update"), userController.edit); //users.update
router.post("/edit/:id", permission("users.update"), userController.handleEdit); //users.update
router.get(
  "/permission/:id",
  permission("users.update"),
  userController.permission,
); //users.update
router.post(
  "/permission/:id",
  permission("users.update"),
  userController.handlePermission,
); //users.update
router.post("/delete/:id", permission("users.delete"), userController.delete); //users.delete

// router.get("/test-assoc", async (req, res) => {
//   //Lấy dữ liệu liên kết --> Lấy được instance
//   //Ví dụ: Từ user --> Lấy phone --> Lấy được instance của user

//   // const user = await User.findOne({
//   //   where: { id: 1 },
//   //   include: {
//   //     model: Course,
//   //     as: "courses",
//   //   },
//   // });
//   const course = await Course.findOne({
//     where: {
//       id: 1,
//     },
//     include: {
//       model: User,
//       as: "users",
//     },
//   });

//   res.json({ course });
// });

module.exports = router;
