const express = require("express");

const {
  registerUser,
  loginUser,
  profile,
  updateProfile,
  forgotPassword,
  resetPassword,
  enrollCourse,
  MyLearning,
  completeCourse,
  completeLesson,
} = require("../controllers/userController");

const authUser = require("../middlewares/AuthUser");
const upload = require("../middlewares/multer");

const userRouter = express.Router();

userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

userRouter.get("/profile", authUser, profile);

userRouter.post(
  "/update-profile",
  authUser,
  upload.single("image"),
  updateProfile,
);

userRouter.post("/forget-password", forgotPassword);

userRouter.post("/reset-password", resetPassword);

// Enroll course
userRouter.post("/enroll-course", authUser, enrollCourse);

// My learning
userRouter.get("/my-learning", authUser, MyLearning);

// Complete course
userRouter.post("/complete-course", authUser, completeCourse);

// Complete lesson
userRouter.post("/complete-lesson", authUser, completeLesson);

module.exports = userRouter;
