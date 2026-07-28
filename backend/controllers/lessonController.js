const courseModel = require("../models/CourseModel");
const lessonModel = require("../models/LessonModel");

// API Add Lesson
const addLesson = async (req, res) => {
  try {
    const { courseId, title, video, duration, isPreview } = req.body;

    // Validate input
    if (!courseId || !title || !video || !duration) {
      return res.json({
        success: false,
        message: "Missing Details",
      });
    }

    // Check if course exists
    const course = await courseModel.findById(courseId);

    if (!course) {
      return res.json({
        success: false,
        message: "Course not found",
      });
    }

    // Create lesson
    const lesson = await lessonModel.create({
      course: courseId,
      title,
      video,
      duration,
      isPreview,
    });

    return res.json({
      success: true,
      message: "Lesson added successfully",
      lesson,
    });
  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: error.message,
    });
  }
};

//API all Lessons

const allLessons = async (req, res) => {
  try {
    const { courseId } = req.params;

    const lessons = await lessonModel.find({ course: courseId });

    return res.json({
      success: true,
      lessons,
    });

  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: error.message,
    });
  }
};


//API for update Lesson 

const updateLesson = async (req, res) => {
  try {
    const { lessonId } = req.params;
    const { title, video, duration, isPreview } = req.body;

    if (!title || !video || !duration) {
      return res.json({
        success: false,
        message: "Missing Details",
      });
    }

    console.log(req.params)
    console.log(req.body)


    const lesson = await lessonModel.findById(lessonId);

    if (!lesson) {
      return res.json({
        success: false,
        message: "Lesson not found",
      });
    }

    await lessonModel.findByIdAndUpdate(
      lessonId,
      {
        title,
        video,
        duration,
        isPreview,
      },
      { new: true }
    );

    return res.json({
      success: true,
      message: "Lesson updated successfully",
    });

  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: error.message,
    });
  }
};


//API for Delete lesson

const deleteLesson = async (req, res) => {
  try {
    const { lessonId } = req.params;

    const lesson = await lessonModel.findById(lessonId);

    if (!lesson) {
      return res.json({
        success: false,
        message: "Lesson not found",
      });
    }

    await lessonModel.findByIdAndDelete(lessonId);

    return res.json({
      success: true,
      message: "Lesson deleted successfully",
    });

  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// API for students
const allLessonsStudent = async (req, res) => {
  try {
    const { courseId } = req.params;

    const lessons = await lessonModel.find({ course: courseId });

    return res.json({
      success: true,
      lessons,
    });

  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addLesson,
  allLessons,
  updateLesson,
  deleteLesson,
  allLessonsStudent
};
