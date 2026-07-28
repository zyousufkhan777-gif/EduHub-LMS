const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    thumbnail: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "instructor",
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    level: {
      type: String,
      required: true,
    },

    language: {
      type: String,
      required: true,
    },

    duration: {
      type: Number,
      required: true,
    },

    video: {
      type: String,
      default: "",
    },

    rating: {
      type: Number,
      default: 0,
    },

    totalStudents: {
      type: Number,
      default: 0,
    },

    totalLessons: {
      type: Number,
      default: 0,
    },

    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);


const courseModel =
  mongoose.models.course ||
  mongoose.model("course", courseSchema);


module.exports = courseModel;