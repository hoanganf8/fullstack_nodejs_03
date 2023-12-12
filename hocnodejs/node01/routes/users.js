import express from "express";
import coursesRouter from "./courses.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import userController from "../controllers/user.controller.js";
const router = express.Router();

router.use("/courses", coursesRouter);

// router.use(authMiddleware);

//users
router.get("/", userController.index);

//users/add
router.get("/add", userController.add);

//users/active
router.get("/active/:id", userController.active);

export default router;
