const courseModel = require("../models/CourseModel");
const ReviewModel = require("../models/ReviewModel");
const userModel = require("../models/UserModel");

const createReview = async (req, res) => {
  try {
    const { courseId, rating, review } = req.body;
    const userId = req.userId;

    if (!courseId || !rating || !review) {
      return res.json({ success: false, message: "Missing Details" });
    }

    const course = await courseModel.findById(courseId);

    if (!course) {
      return res.json({
        success: false,
        message: "Course not found",
      });
    }

    const user = await userModel.findById(userId);

    const enrolled = user.enrolledCourses.some(
      (id) => id.toString() === courseId,
    );

    if (!enrolled) {
      return res.json({
        success: false,
        message: "You must enroll first",
      });
    }

    const existingReview = await ReviewModel.findOne({
      userId,
      courseId,
    });

    if (existingReview) {
      return res.json({
        success: false,
        message: "You already reviewed this course",
      });
    }

    await ReviewModel.create({
      userId,
      courseId,
      rating,
      review,
    });

    res.json({
      success: true,
      message: "Review added successfully",
    });
  } catch (error) {
    console.log(error);

    res.json({ success: false, message: error.message });
  }
};

// API get all review
const getCourseReviews = async (req, res) => {
  try {
    const { courseId } = req.params;

    const reviews = await ReviewModel.find({ courseId }).populate(
      "userId",
      "name image",
    );

    res.json({
      success: true,
      reviews,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//API for all reviws

const getAllReviews = async (req, res) => {
  try {
    const reviews = await ReviewModel.find({})
      .populate("userId", "name image")
      .populate("courseId", "title");

    return res.json({
      success: true,
      reviews,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

//API Delete review
const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const userId = req.userId;

    const review = await ReviewModel.findById(reviewId);

    if (!review) {
      return res.json({
        success: false,
        message: "Review not found",
      });
    }

    if (review.userId.toString() !== userId) {
      return res.json({
        success: false,
        message: "Unauthorized",
      });
    }

    await ReviewModel.findByIdAndDelete(reviewId);

    res.json({
      success: true,
      message: "Review deleted successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createReview,
  getCourseReviews,
  deleteReview,
  getAllReviews
};
