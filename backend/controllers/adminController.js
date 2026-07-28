const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const AdminModel = require("../models/AdminModel");
const userModel = require("../models/UserModel");
const courseModel = require("../models/CourseModel");
const enrollmentModel = require("../models/EnrollmentModel");
const instructorModel = require("../models/InstructorModel");
const contactModel = require("../models/ContactModel");
const paymentModel = require("../models/PaymentModel");

// ===========================
// Admin Login
// ===========================

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        success: false,
        message: "Missing Details",
      });
    }

    const admin = await AdminModel.findOne({ email });

    if (!admin) {
      return res.json({
        success: false,
        message: "Admin not found",
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const aToken = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.json({
      success: true,
      message: "Login Successful",
      aToken,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===========================
// Dashboard
// ===========================

const dashboardData = async (req, res) => {
  try {
    const users = await userModel.countDocuments();

    const instructors = await instructorModel.countDocuments();

    const courses = await courseModel.countDocuments();

    const enrollments = await enrollmentModel.countDocuments();

    const payments = await paymentModel.countDocuments();

    return res.json({
      success: true,
      dashboardData: {
        users,
        instructors,
        courses,
        enrollments,
        payments,
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===========================
// Users
// ===========================

const usersList = async (req, res) => {
  try {
    const users = await userModel
      .find({})
      .select("-password")
      .sort({ createdAt: -1 });

    return res.json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===========================
// Instructors
// ===========================

const instructorsList = async (req, res) => {
  try {
    const instructors = await instructorModel
      .find({})
      .select("-password")
      .sort({ createdAt: -1 });

    return res.json({
      success: true,
      instructors,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===========================
// Courses
// ===========================

const coursesList = async (req, res) => {
  try {
    const courses = await courseModel
      .find({})
      .populate("instructor", "name email")
      .sort({ createdAt: -1 });

    return res.json({
      success: true,
      courses,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===========================
// Contacts
// ===========================

const contactList = async (req, res) => {
  try {
    const contacts = await contactModel.find({}).sort({ createdAt: -1 });

    return res.json({
      success: true,
      contacts,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===========================
// Payments
// ===========================

const paymentsList = async (req, res) => {
  try {
    const payments = await paymentModel
      .find({})
      .populate("userId", "name email")
      .populate("courseId", "title price")
      .sort({ createdAt: -1 });

    return res.json({
      success: true,
      payments,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  adminLogin,
  dashboardData,
  usersList,
  instructorsList,
  coursesList,
  contactList,
  paymentsList,
};
