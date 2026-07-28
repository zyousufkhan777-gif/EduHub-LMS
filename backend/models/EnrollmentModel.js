const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
      required: true,
    },

    progress: {
      type: Number,
      default: 0,
    },

    completedLessons: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "lesson",
      },
    ],

    enrolledAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const enrollmentModel =
  mongoose.models.enrollment ||
  mongoose.model("enrollment", enrollmentSchema);

module.exports = enrollmentModel;