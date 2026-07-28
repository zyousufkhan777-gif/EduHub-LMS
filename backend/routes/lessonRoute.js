const express = require("express");
const authInstructor = require("../middlewares/AuthInstructor");

const {
  addLesson,
  allLessons,
  updateLesson,
  deleteLesson,
  allLessonsStudent,
} = require("../controllers/lessonController");

const lessonRouter = express.Router();

// Instructor APIs

lessonRouter.post("/add-lesson", authInstructor, addLesson);

lessonRouter.get("/all-lessons/:courseId", authInstructor, allLessons);

lessonRouter.post("/update-lesson/:lessonId", authInstructor, updateLesson);

lessonRouter.post("/delete-lesson/:lessonId", authInstructor, deleteLesson);

// Student / Frontend API

lessonRouter.get("/lessons-list/:courseId", allLessonsStudent);

module.exports = lessonRouter;
