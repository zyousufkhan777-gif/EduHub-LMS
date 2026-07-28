const NotificationModel = require("../models/NotificationModel");


// get notification API
const getNotifications = async (req, res) => {
  try {

    const userId = req.userId;

    const notifications = await NotificationModel.find({
      userId,
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      notifications,
    });

  } catch (error) {

    res.json({
      success: false,
      message: error.message,
    });

  }
};


// notification Read API
const markAsRead = async (req, res) => {
  try {

    const { notificationId } = req.params;
    const userId = req.userId;

    const notification = await NotificationModel.findById(notificationId);

    if (!notification) {
      return res.json({
        success: false,
        message: "Notification not found",
      });
    }

    if (notification.userId.toString() !== userId) {
      return res.json({
        success: false,
        message: "Unauthorized",
      });
    }

    notification.isRead = true;

    await notification.save();

    res.json({
      success: true,
      message: "Notification marked as read",
    });

  } catch (error) {

    res.json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  getNotifications,
  markAsRead
};