const contactModel = require("../models/ContactModel");

// API for Contact
const sendContact = async (req, res) => {
  try {
    const userId = req.userId;
    const { name, subject, email, message } = req.body;

    if (!name || !subject || !email || !message) {
      return res.json({
        success: false,
        message: "All fields are required",
      });
    }

    const contact = await contactModel.create({
      userId,
      name,
      email,
      subject,
      message,
    });

    return res.json({
      success: true,
      message: "Message sent successfully",
      contact,
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
  sendContact,
};
