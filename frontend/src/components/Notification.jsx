import React, { useContext, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import { AppContext } from "../context/AppContext";

const Notification = ({
  showNotification,
  setShowNotification,
}) => {
  const {
    notifications,
    getNotifications,
    markNotificationAsRead,
  } = useContext(AppContext);

  useEffect(() => {
    if (showNotification) {
      getNotifications();
    }
  }, [showNotification]);

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[360px] bg-white shadow-2xl z-50 transition-all duration-300 ${
        showNotification ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b">
        <h2 className="text-2xl font-bold text-blue-600">
          Notifications
        </h2>

        <MdOutlineClose
          onClick={() => setShowNotification(false)}
          className="text-3xl cursor-pointer hover:text-red-500"
        />
      </div>

      {/* Notifications */}
      <div className="h-[calc(100vh-80px)] overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <p className="text-gray-500">
              No notifications found
            </p>
          </div>
        ) : (
          notifications.map((item) => (
            <div
              key={item._id}
              className={`border-b p-5 cursor-pointer transition ${
                item.isRead
                  ? "bg-white"
                  : "bg-blue-50 hover:bg-blue-100"
              }`}
              onClick={() => markNotificationAsRead(item._id)}
            >
              <h3 className="font-semibold text-lg text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {item.message}
              </p>

              <p className="text-xs text-gray-400 mt-3">
                {new Date(item.createdAt).toLocaleString()}
              </p>

              {!item.isRead && (
                <span className="inline-block mt-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  New
                </span>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notification;