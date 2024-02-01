var express = require("express");
var router = express.Router();
const sendMail = require("../utils/mail");
const roleController = require("../controllers/role.controller");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { req });
});

router.get("/roles", roleController.index);
router.get("/roles/add", roleController.add);
router.post("/roles/add", roleController.handleAdd);
router.get("/roles/edit/:id", roleController.edit);
router.post("/roles/edit/:id", roleController.handleEdit);
router.post("/roles/delete/:id", roleController.delete);

// router.get("/send-mail", async (req, res) => {
//   const info = await sendMail(
//     "hoangan@fullstack.edu.vn",
//     "Hello Fullstack K3",
//     "Tôi là giảng viên tại F8",
//   );
//   res.json(info);
// });

module.exports = router;
