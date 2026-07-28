const enrollmentModel = require("../models/EnrollmentModel");
const lessonModel = require("../models/LessonModel");

// API Update Progress

const progress = async (req, res) => {
  try {
    const userId = req.userId;
    const { courseId, lessonId } = req.body;

    // Validation
    if (!courseId || !lessonId) {
      return res.json({
        success: false,
        message: "Missing Details",
      });
    }

    // Check Enrollment
    const enrollment = await enrollmentModel.findOne({
      userId,
      courseId,
    });

    if (!enrollment) {
      return res.json({
        success: false,
        message: "You are not enrolled in this course",
      });
    }

    // Check Lesson
    const lesson = await lessonModel.findById(lessonId);

    if (!lesson) {
      return res.json({
        success: false,
        message: "Lesson not found",
      });
    }

    // Check if lesson already completed
    if (enrollment.completedLessons.includes(lessonId)) {
      return res.json({
        success: false,
        message: "Lesson already completed",
      });
    }

    // Add completed lesson
    enrollment.completedLessons.push(lessonId);

    // Count total lessons in course
    const totalLessons = await lessonModel.countDocuments({
      course: courseId,
    });

    // Calculate progress
    const completedLessons = enrollment.completedLessons.length;

    enrollment.progress = Math.round(
      (completedLessons / totalLessons) * 100
    );

    // Save changes
    await enrollment.save();

    return res.json({
      success: true,
      message: "Progress updated successfully",
      progress: enrollment.progress,
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
  progress,
};