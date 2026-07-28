const PaymentModel = require("../models/PaymentModel");
const CourseModel = require("../models/CourseModel");
const paymentModel = require("../models/PaymentModel");
const userModel = require("../models/UserModel");

// API Create payment
const createPayment = async (req, res) => {
  try {
    const { courseId } = req.body;
    const userId = req.userId;

    const course = await CourseModel.findById(courseId);

    if (!course) {
      return res.json({
        success: false,
        message: "Course not found",
      });
    }

    const payment = await PaymentModel.create({
      userId,
      courseId,
      amount: course.price,
      status: "pending",
    });

    res.json({
      success: true,
      message: "Payment created successfully",
      payment,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// API verifyPayment

const verifyPayment = async (req, res) => {
  try {
    const { paymentId } = req.body;

    const userId = req.userId;

    const payment = await PaymentModel.findById(paymentId);

    if (!payment) {
      return res.json({
        success: false,
        message: "Payment not found",
      });
    }

    payment.status = "success";

    await payment.save();

    await userModel.findByIdAndUpdate(userId, {
      $addToSet: {
        enrolledCourses: payment.courseId,
      },
    });

    res.json({
      success: true,
      message: "Payment verified successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//API History Payments
const paymentHistory = async (req, res) => {
  try {
    const userId = req.userId;

    const payments = await PaymentModel.find({
      userId,
    }).populate("courseId", "title thumbnail price");

    res.json({
      success: true,
      payments,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  createPayment,
  verifyPayment,
  paymentHistory
};
