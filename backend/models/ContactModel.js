const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    subject: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'user'
    }
  },
  {
    timestamps: true,
  }
);

const contactModel =
  mongoose.models.contact ||
  mongoose.model("contact", contactSchema);

module.exports = contactModel;