const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    specialization: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    skills: {
      type: [String],
      default: [],
    },

    rating: {
      type: Number,
      default: 0,
    },

    followers: {
      type: Number,
      default: 0,
    },

    country: {
      type: String,
      required: true,
    },

    approved: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    role: {
      type: String,
      enum: ["instructor"],
      default: "instructor",
    },
  },
  {
    timestamps: true,
  },
);

const instructorModel =
  mongoose.models.instructor || mongoose.model("instructor", instructorSchema);

module.exports = instructorModel;
