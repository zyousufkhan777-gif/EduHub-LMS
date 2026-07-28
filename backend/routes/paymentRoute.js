const express = require("express");
const authUser = require("../middlewares/AuthUser");

const { createPayment, verifyPayment, paymentHistory } = require("../controllers/paymentController");

const paymentRouter = express.Router();

paymentRouter.post("/create", authUser, createPayment);
paymentRouter.post("/verify", authUser, verifyPayment);
paymentRouter.get("/history", authUser, paymentHistory);

module.exports = paymentRouter;
