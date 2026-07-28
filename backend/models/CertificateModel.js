const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema(
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

    certificateNumber: {
      type: String,
      required: true,
      unique: true,
    },

    issueDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const CertificateModel = mongoose.model(
  "Certificate",
  certificateSchema
);

module.exports = CertificateModel;