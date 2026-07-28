const express = require("express");
const authUser = require("../middlewares/AuthUser");
const { progress } = require("../controllers/enrollmentController");

const enrollmentRouter = express.Router();

enrollmentRouter.post("/update-progress", authUser, progress);

module.exports = enrollmentRouter;