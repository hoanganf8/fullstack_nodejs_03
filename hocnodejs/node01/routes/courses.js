import express from "express";
import userController from "../controllers/user.controller.js";
const router = express.Router();

//users/courses
router.get("/", userController.courses);

router.get("/active", userController.courseActive);

router.get("/pending", userController.coursePending);

export default router;
