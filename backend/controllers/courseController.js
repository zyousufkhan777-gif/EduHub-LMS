const { cloudinary } = require("../config/cloudinary");

const instructorModel = require("../models/InstructorModel");
const courseModel = require("../models/CourseModel");

// ===============================
// Add Course
// ===============================

const addCourse = async (req, res) => {
  try {
    const instructorId = req.instructorId;

    const { title, description, category, price, level, duration, language } =
      req.body;

    const thumbnail = req.file;

    if (
      !title ||
      !description ||
      !category ||
      !price ||
      !level ||
      !duration ||
      !language
    ) {
      return res.json({
        success: false,
        message: "Missing Details",
      });
    }

    if (!thumbnail) {
      return res.json({
        success: false,
        message: "Thumbnail is required",
      });
    }

    const instructor = await instructorModel.findById(instructorId);

    if (!instructor) {
      return res.json({
        success: false,
        message: "Instructor not found",
      });
    }

    const uploadResult = await cloudinary.uploader.upload(thumbnail.path, {
      resource_type: "image",
    });

    const newCourse = new courseModel({
      title,

      description,

      thumbnail: uploadResult.secure_url,

      category,

      instructor: instructorId,

      price,

      level,

      duration,

      language,

      rating: 0,

      totalStudents: 0,

      isPublished: false,
    });

    await newCourse.save();

    return res.json({
      success: true,

      message: "Course Added Successfully",

      course: newCourse,
    });
  } catch (error) {
    console.log(error);

    return res.json({
      success: false,

      message: error.message,
    });
  }
};

// ===============================
// Published Courses
// ===============================

const PublishedCourses = async (req, res) => {
  try {
    const courses = await courseModel
      .find({})
      .populate("instructor", "_id name image specialization");

    return res.json({
      success: true,

      courses,
    });
  } catch (error) {
    return res.json({
      success: false,

      message: error.message,
    });
  }
};

// ===============================
// Single Course
// ===============================

const singleCourse = async (req, res) => {
  try {
    const { courseId } = req.params;

    const course = await courseModel.findById(courseId).populate(
      "instructor",

      "_id name email image specialization experience description rating followers",
    );

    if (!course) {
      return res.json({
        success: false,

        message: "Course not found",
      });
    }

    return res.json({
      success: true,

      course,
    });
  } catch (error) {
    return res.json({
      success: false,

      message: error.message,
    });
  }
};

// ===============================
// Instructor Courses
// ===============================

const myCourses = async (req, res) => {
  try {
    const instructorId = req.instructorId;

    const courses = await courseModel.find({
      instructor: instructorId,
    });

    return res.json({
      success: true,

      myCourses: courses,
    });
  } catch (error) {
    return res.json({
      success: false,

      message: error.message,
    });
  }
};

// ===============================
// Filter Courses
// ===============================

const filterCourses = async (req, res) => {
  try {
    const {
      search,

      category,

      level,

      instructor,
    } = req.query;

    const filter = {};

    if (search) {
      filter.title = {
        $regex: search,

        $options: "i",
      };
    }

    if (category) {
      filter.category = category;
    }

    if (level) {
      filter.level = level;
    }

    if (instructor) {
      filter.instructor = instructor;
    }

    const courses = await courseModel.find(filter).populate(
      "instructor",

      "_id name image",
    );

    return res.json({
      success: true,

      courses,
    });
  } catch (error) {
    return res.json({
      success: false,

      message: error.message,
    });
  }
};

// ===============================
// Search Courses
// ===============================

const searchCourses = async (req, res) => {
  try {
    const { keyword } = req.query;

    const courses = await courseModel.find({
      title: {
        $regex: keyword,

        $options: "i",
      },
    });

    return res.json({
      success: true,

      courses,
    });
  } catch (error) {
    return res.json({
      success: false,

      message: error.message,
    });
  }
};

// ===============================
// Update Course
// ===============================

const updateCourse = async (req, res) => {
  try {
    const { courseId } = req.params;

    const instructorId = req.instructorId;

    const course = await courseModel.findById(courseId);

    if (!course) {
      return res.json({
        success: false,

        message: "Course not found",
      });
    }

    if (course.instructor.toString() !== instructorId) {
      return res.json({
        success: false,

        message: "You are not authorized",
      });
    }

    let thumbnailUrl = course.thumbnail;

    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload(
        req.file.path,

        {
          resource_type: "image",
        },
      );

      thumbnailUrl = uploadResult.secure_url;
    }

    await courseModel.findByIdAndUpdate(
      courseId,

      {
        ...req.body,

        thumbnail: thumbnailUrl,
      },
    );

    return res.json({
      success: true,

      message: "Course Updated Successfully",
    });
  } catch (error) {
    return res.json({
      success: false,

      message: error.message,
    });
  }
};

// ===============================
// Delete Course
// ===============================

const deleteCourse = async (req, res) => {
  try {
    const { courseId } = req.params;

    const instructorId = req.instructorId;

    const course = await courseModel.findById(courseId);

    if (!course) {
      return res.json({
        success: false,

        message: "Course not found",
      });
    }

    if (course.instructor.toString() !== instructorId) {
      return res.json({
        success: false,

        message: "Not Authorized",
      });
    }

    await courseModel.findByIdAndDelete(courseId);

    return res.json({
      success: true,

      message: "Course deleted successfully",
    });
  } catch (error) {
    return res.json({
      success: false,

      message: error.message,
    });
  }
};

module.exports = {
  addCourse,

  PublishedCourses,

  singleCourse,

  myCourses,

  updateCourse,

  deleteCourse,

  searchCourses,

  filterCourses,
};
