var express = require("express");
var router = express.Router();
const userController = require("../controllers/api/v1/user.controller");
const authController = require("../controllers/api/v1/auth.controller");
const authMiddleware = require("../middlewares/api/auth.middleware");
router.get("/v1/users", authMiddleware, userController.index);
router.get("/v1/users/:id", userController.find);
router.post("/v1/users", userController.store);
router.post("/v1/auth/login", authController.login);
router.get("/v1/auth/profile", authMiddleware, authController.profile);
router.post("/v1/auth/logout", authMiddleware, authController.logout);
router.post("/v1/auth/refresh", authController.refresh);

module.exports = router;
