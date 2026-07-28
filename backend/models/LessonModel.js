const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    video: {
      type: String,
      default: "",
    },

    duration: {
      type: Number,
      required: true,
    },

    isPreview: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const lessonModel =
  mongoose.models.lesson || mongoose.model("lesson", lessonSchema);

module.exports = lessonModel;
