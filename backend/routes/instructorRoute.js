const express = require("express");
const authUser = require("../middlewares/AuthUser");
const upload = require("../middlewares/multer");

const {
  becomeInstructor,
  loginInstructor,
  allInstructors,
  getInstructor,
  instructorDashboard,
  instructorProfile,
  updateInstructorProfile,
  changeInstructorPassword
} = require("../controllers/instructorController");
const authInstructor = require("../middlewares/AuthInstructor");

const instructorRouter = express.Router();

instructorRouter.post(
  "/become-instructor",
  authUser,
  upload.single("image"),
  becomeInstructor,
);

instructorRouter.post("/login", loginInstructor);

instructorRouter.get("/dashboard", authInstructor, instructorDashboard);

instructorRouter.get("/profile", authInstructor, instructorProfile);

instructorRouter.post(
  "/change-password",
  authInstructor,
  changeInstructorPassword,
);

instructorRouter.post(
  "/update-profile",
  authInstructor,
  upload.single("image"),
  updateInstructorProfile,
);

/* Get all instructors */
instructorRouter.get("/list", allInstructors);

/* Get single instructor */
instructorRouter.get("/:id", getInstructor);

module.exports = instructorRouter;
