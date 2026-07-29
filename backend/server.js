const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/mongodb");
const { connectCloudinary } = require("./config/cloudinary");

// Routes
const userRouter = require("./routes/userRoute");
const instructorRouter = require("./routes/instructorRoute");
const courseRouter = require("./routes/courseRoute");
const lessonRouter = require("./routes/lessonRoute");
const enrollmentRouter = require("./routes/enrollmentRoute");
const contactRouter = require("./routes/contactRoute");
const adminRouter = require("./routes/adminRoute");
const paymentRouter = require("./routes/paymentRoute");
const certificateRouter = require("./routes/certificateRoute");
const notificationRouter = require("./routes/NotificationRoute");

const app = express();

// Connect Database
connectDB();
connectCloudinary();

// Middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "token",
      "aToken",
      "iToken",
    ],
  }),
);

app.use(express.json());

// Routes
app.use("/api/user", userRouter);
app.use("/api/instructor", instructorRouter);
app.use("/api/course", courseRouter);
app.use("/api/lesson", lessonRouter);
app.use("/api/enrollment", enrollmentRouter);
app.use("/api/contact", contactRouter);
app.use("/api/admin", adminRouter);
app.use("/api/payment", paymentRouter);
app.use("/api/certificate", certificateRouter);
app.use("/api/notification", notificationRouter);

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "EduHub API is Running...",
  });
});

// Local Development
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 7000;

  app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`);
  });
}

// Export for Vercel
module.exports = app;
