const express = require("express");
const authInstructor = require("../middlewares/AuthInstructor");
const upload = require("../middlewares/multer");

const {
  addCourse,
  PublishedCourses,
  singleCourse,
  myCourses,
  updateCourse,
  deleteCourse,
  searchCourses,
  filterCourses
} = require("../controllers/courseController");

const courseRouter = express.Router();

courseRouter.post(
  "/add-course",
  authInstructor,
  upload.single("thumbnail"),
  addCourse,
);

// Public Routes
courseRouter.get("/publish-courses", PublishedCourses);

courseRouter.get("/my-courses", authInstructor, myCourses);

courseRouter.post(
  "/update-course/:courseId",authInstructor,upload.single("thumbnail"),updateCourse,
);

courseRouter.post('/delete-course/:courseId' , authInstructor, deleteCourse)

courseRouter.get("/search", searchCourses);

courseRouter.get("/filter", filterCourses);

// Dynamic Route (همیشه آخر)
courseRouter.get("/:courseId", singleCourse);

module.exports = courseRouter;
