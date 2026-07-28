const express = require("express");
const { sendContact } = require("../controllers/contactController");
const authUser = require("../middlewares/AuthUser");
const authAdmin = require("../middlewares/AuthAdmin");

const contactRouter = express.Router();


contactRouter.post("/send",authUser,sendContact);

module.exports = contactRouter;