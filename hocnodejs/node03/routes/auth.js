var express = require("express");
const passport = require("passport");
var router = express.Router();
const authController = require("../controllers/auth.controller");
router.get("/login", authController.login);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login",
    failureFlash: true,
    badRequestMessage: "Vui lòng nhập email và mật khẩu",
    successRedirect: "/",
  }),
  //   (req, res) => {
  //     res.json({ status: "success", user: req.user });
  //   },
);
router.get("/google/redirect", passport.authenticate("google"));
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/login",
    failureFlash: true,
    successRedirect: "/",
  }),
);

router.get("/logout", (req, res) => {
  req.logout((err) => {});
  return res.redirect("/auth/login");
});

module.exports = router;
