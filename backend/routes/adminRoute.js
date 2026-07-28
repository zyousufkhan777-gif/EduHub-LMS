const express = require("express");
const authAdmin = require("../middlewares/AuthAdmin");

const {
  adminLogin,
  dashboardData,
  usersList,
  instructorsList,
  coursesList,
  contactList,
  paymentsList,
} = require("../controllers/adminController");

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);

adminRouter.get("/dashboard", authAdmin, dashboardData);

adminRouter.get("/users", authAdmin, usersList);

adminRouter.get("/courses", authAdmin, coursesList);

adminRouter.get("/instructors", authAdmin, instructorsList);

adminRouter.get("/contacts", authAdmin, contactList);

adminRouter.get("/payments", authAdmin, paymentsList);

module.exports = adminRouter;
