const express = require('express')
const authUser = require('../middlewares/AuthUser')
const { getNotifications ,markAsRead } = require("../controllers/NotificationController");


const notificationRouter = express.Router()


notificationRouter.get("/list", authUser, getNotifications);

notificationRouter.post(
  "/read/:notificationId",
  authUser,
  markAsRead
);


module.exports = notificationRouter