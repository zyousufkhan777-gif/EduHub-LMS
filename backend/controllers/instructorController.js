const { cloudinary } = require("../config/cloudinary");
const courseModel = require("../models/CourseModel");
const instructorModel = require("../models/InstructorModel");
const userModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const PaymentModel = require("../models/PaymentModel");
// API becomeInstructor
const becomeInstructor = async (req, res) => {
  try {
    const userId = req.userId;

    const { specialization, experience, description, skills, country } =
      req.body;

    const imageFile = req.file;

    if (!specialization || !experience || !description || !skills || !country) {
      return res.json({ success: false, message: "Missing Details" });
    }

    const user = await userModel.findById(userId);

    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    const existingInstructor = await instructorModel.findOne({
      email: user.email,
    });

    if (existingInstructor) {
      return res.json({
        success: false,
        message: "You are already an instructor",
      });
    }

    let imageUrl = user.image;
    if (imageFile) {
      const uploadResult = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });

      imageUrl = uploadResult.secure_url;
    }

    const instructor = new instructorModel({
      name: user.name,
      email: user.email,
      password: user.password,
      image: imageUrl,
      specialization,
      experience,
      description,
      skills:
        typeof skills === "string"
          ? skills.split(",").map((item) => item.trim())
          : skills,
      country,

      rating: 0,
      followers: 0,
      role: "instructor",
    });

    await instructor.save();

    await userModel.findByIdAndUpdate(userId, {
      role: "instructor",
    });

    return res.json({
      success: true,
      message: "Instructor account created successfully",
    });
  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// API for login instructor

const loginInstructor = async (req, res) => {
  try {
    const { password, email } = req.body;

    if (!password || !email) {
      return res.json({ success: false, message: "Missing Details!" });
    }

    const instructor = await instructorModel.findOne({ email });

    if (!instructor) {
      return res.json({ success: false, message: "instructor not found" });
    }

    const isMatch = await bcrypt.compare(password, instructor.password);

    if (isMatch) {
      const Itoken = jwt.sign({ id: instructor._id }, process.env.JWT_SECRET);
      res.json({ success: true, Itoken });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// all instructors

const allInstructors = async (req, res) => {
  try {
    const instructors = await instructorModel.find({}).select("-password");

    return res.json({
      success: true,
      instructors,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// get single instructor

const getInstructor = async (req, res) => {
  try {
    const { id } = req.params;

    const instructor = await instructorModel.findById(id).select("-password");

    if (!instructor) {
      return res.json({
        success: false,
        message: "Instructor not found",
      });
    }

    return res.json({
      success: true,
      instructor,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// Dashboard Instructor API
const instructorDashboard = async (req, res) => {
  try {
    const instructorId = req.instructorId;

    const courses = await courseModel.find({
      instructor: instructorId,
    });

    const totalCourses = courses.length;

    let totalStudents = 0;
    let totalLessons = 0;
    let totalEarnings = 0;

    courses.forEach((course) => {
      totalStudents += course.totalStudents || 0;

      totalLessons += course.totalLessons?.length || 0;
    });

    const payments = await PaymentModel.find({
      instructorId,

      status: "completed",
    });

    payments.forEach((payment) => {
      totalEarnings += payment.amount || 0;
    });

    const recentCourses = await courseModel
      .find({
        instructor: instructorId,
      })
      .sort({
        createdAt: -1,
      })
      .limit(5);

    return res.json({
      success: true,

      dashboardData: {
        totalCourses,

        totalStudents,

        totalLessons,

        totalEarnings,

        recentCourses,
      },
    });
  } catch (error) {
    console.log(error);

    return res.json({
      success: false,

      message: error.message,
    });
  }
};

// Instructor Profile
const instructorProfile = async (req, res) => {
  try {
    const instructorId = req.instructorId;

    const instructor = await instructorModel
      .findById(instructorId)
      .select("-password");

    if (!instructor) {
      return res.status(404).json({
        success: false,
        message: "Instructor not found",
      });
    }

    return res.status(200).json({
      success: true,
      instructor,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// update instructor profile

const updateInstructorProfile = async (req, res) => {
  try {
    const instructorId = req.instructorId;

    const { name, specialization, experience, skills, country, description } =
      req.body;

    const instructor = await instructorModel.findById(instructorId);

    if (!instructor) {
      return res.status(404).json({
        success: false,
        message: "Instructor not found",
      });
    }

    // Update Fields
    if (name) instructor.name = name;
    if (specialization) instructor.specialization = specialization;
    if (experience) instructor.experience = experience;
    if (skills) instructor.skills = skills;
    if (country) instructor.country = country;
    if (description) instructor.description = description;

    // Update Image
    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "image",
      });

      instructor.image = uploadResult.secure_url;
    }

    await instructor.save();

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      instructor,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// change instructor password
const changeInstructorPassword = async (req, res) => {
  try {
    const instructorId = req.instructorId;

    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.json({
        success: false,
        message: "Missing Details",
      });
    }

    const instructor = await instructorModel.findById(instructorId);

    if (!instructor) {
      return res.json({
        success: false,
        message: "Instructor not found",
      });
    }

    const isMatch = await bcrypt.compare(oldPassword, instructor.password);

    if (!isMatch) {
      return res.json({
        success: false,
        message: "Old password is incorrect",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    instructor.password = hashedPassword;

    await instructor.save();

    return res.json({
      success: true,
      message: "Password changed successfully",
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
  becomeInstructor,
  loginInstructor,
  allInstructors,
  getInstructor,
  instructorDashboard,
  instructorProfile,
  updateInstructorProfile,
  changeInstructorPassword,
};
