var express = require("express");
var router = express.Router();
const sendMail = require("../utils/mail");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/send-mail", async (req, res) => {
  const info = await sendMail(
    "hoangan@fullstack.edu.vn",
    "Hello Fullstack K3",
    "Tôi là giảng viên tại F8",
  );
  res.json(info);
});

module.exports = router;
