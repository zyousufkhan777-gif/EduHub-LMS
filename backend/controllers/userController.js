const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { cloudinary } = require("../config/cloudinary");
const userModel = require("../models/UserModel");
const nodemailer = require("nodemailer");
const courseModel = require("../models/CourseModel");
const enrollmentModel = require("../models/EnrollmentModel");

//API REGISTER
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check missing fields
    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "Missing Details",
      });
    }

    // Validate email
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    // Validate password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    // Check if user already exists
    const userExists = await userModel.findOne({ email });

    if (userExists) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Generate JWT
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

    return res.json({
      success: true,
      message: "User registered successfully",
      token,
    });
  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// API LOGIN //

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check missing fields
    if (!email || !password) {
      return res.json({
        success: false,
        message: "Missing Details",
      });
    }

    // Check user
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User does not exist",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    return res.json({
      success: true,
      token,
      message: "Login successful",
    });
  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: error.message,
    });
  }
};

//API Profile

const profile = async (req, res) => {
  try {
    const userId = req.userId;

    const userData = await userModel.findById(userId).select("-password");

    res.json({ success: true, userData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API Update Profile

const updateProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const { name, phone, country } = req.body;
    const imageFile = req.file;

    if (!name || !phone || !country) {
      return res.json({
        success: false,
        message: "Missing details",
      });
    }

    const updateData = {
      name,
      phone,
      country,
    };

    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });

      updateData.image = imageUpload.secure_url;
    }

    await userModel.findByIdAndUpdate(userId, updateData);

    return res.json({
      success: true,
      message: "Profile Updated Successfully",
    });
  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// API ForgetPassword

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.json({
        success: false,
        message: "Email is required",
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    // Create reset token

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "15m",
      },
    );

    // در پروژه واقعی اینجا ایمیل ارسال می‌شود
    // فعلاً برای تست token را برمی‌گردانیم

    return res.json({
      success: true,
      message: "Reset password token created",
      token,
    });
  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// API Reset Password

const resetPassword = async (req, res) => {
  try {
    const { token, password } = req.body;

    if (!token || !password) {
      return res.json({
        success: false,
        message: "Missing details",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    // Verify token

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Hash password

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    // Update password

    await userModel.findByIdAndUpdate(decoded.id, {
      password: hashedPassword,
    });

    return res.json({
      success: true,

      message: "Password reset successfully",
    });
  } catch (error) {
    console.log(error);

    return res.json({
      success: false,

      message: "Invalid or expired token",
    });
  }
};

// Enroll Course API

const enrollCourse = async (req, res) => {
  try {
    const userId = req.userId;
    const { courseId } = req.body;

    if (!courseId) {
      return res.json({
        success: false,
        message: "Course ID is required",
      });
    }

    const course = await courseModel.findById(courseId);

    if (!course) {
      return res.json({
        success: false,
        message: "Course not found",
      });
    }

    const user = await userModel.findById(userId);

    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    // already enrolled

    if (user.enrolledCourses.includes(courseId)) {
      return res.json({
        success: false,
        message: "Already enrolled",
      });
    }

    // add course to user

    user.enrolledCourses.push(courseId);

    // create enrollment document

    const enrollment = new enrollmentModel({
      userId,

      courseId,

      progress: 0,

      completedLessons: [],
    });

    await enrollment.save();

    course.totalStudents += 1;

    await user.save();

    await course.save();

    res.json({
      success: true,

      message: "Course enrolled successfully",
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,

      message: error.message,
    });
  }
};

// My Learning API

const MyLearning = async (req, res) => {
  try {
    const userId = req.userId;

    const enrollments = await enrollmentModel
      .find({ userId })
      .populate("courseId");

    res.json({
      success: true,

      courses: enrollments,
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,

      message: error.message,
    });
  }
};

// Complete Courses

const completeCourse = async (req, res) => {
  try {
    const userId = req.userId;
    const { courseId } = req.body;

    const enrollment = await enrollmentModel.findOne({
      userId,
      courseId,
    });

    if (!enrollment) {
      return res.json({
        success: false,
        message: "Enrollment not found",
      });
    }

    if (enrollment.progress !== 100) {
      return res.json({
        success: false,
        message: "Course not completed yet",
      });
    }

    const user = await userModel.findById(userId);

    if (!user.completedCourses.includes(courseId)) {
      user.completedCourses.push(courseId);
    }

    await user.save();

    return res.json({
      success: true,
      message: "Course completed successfully",
    });
  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// Complete Lesson API

const completeLesson = async (req, res) => {
  try {
    const userId = req.userId;

    const { courseId, lessonId } = req.body;

    if (!courseId || !lessonId) {
      return res.json({
        success: false,
        message: "Missing details",
      });
    }

    const enrollment = await enrollmentModel.findOne({
      userId,
      courseId,
    });

    if (!enrollment) {
      return res.json({
        success: false,
        message: "Enrollment not found",
      });
    }

    // Check lesson already completed

    if (enrollment.completedLessons.includes(lessonId)) {
      return res.json({
        success: false,
        message: "Lesson already completed",
      });
    }

    // Add lesson

    enrollment.completedLessons.push(lessonId);

    const course = await courseModel.findById(courseId);

    const totalLessons = course.lessons.length;

    const completedLessons = enrollment.completedLessons.length;

    enrollment.progress = Math.round((completedLessons / totalLessons) * 100);

    await enrollment.save();

    return res.json({
      success: true,
      message: "Lesson completed successfully",
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
};
