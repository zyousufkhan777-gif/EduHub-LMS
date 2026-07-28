const CertificateModel = require("../models/CertificateModel");
const courseModel = require("../models/CourseModel");
const userModel = require("../models/UserModel");

// API GenerateCertificate
const generateCertificate = async (req, res) => {
  try {
    const { courseId } = req.body;
    const userId = req.userId;

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

    const completed = user.completedCourses.some(
      (id) => id.toString() === courseId,
    );

    if (!completed) {
      return res.json({
        success: false,
        message: "Complete the course first",
      });
    }

    const existingCertificate = await CertificateModel.findOne({
      userId,
      courseId,
    });

    if (existingCertificate) {
      return res.json({
        success: true,
        message: "Certificate already exists",
        certificate: existingCertificate,
      });
    }

    const certificate = await CertificateModel.create({
      userId,
      courseId,
      certificateNumber: "CERT-" + Date.now(),
    });

    res.json({
      success: true,
      message: "Certificate generated successfully",
      certificate,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//API get certificate


const getCertificate = async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.userId;

    const certificate = await CertificateModel.findOne({
      userId,
      courseId,
    })
      .populate("userId", "name email")
      .populate("courseId", "title");

    if (!certificate) {
      return res.json({
        success: false,
        message: "Certificate not found",
      });
    }

    res.json({
      success: true,
      certificate,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  generateCertificate,
  getCertificate
};
