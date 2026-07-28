const express = require("express");
const cors = require("cors");
const connectDB = require("./config/mongodb");
const {connectCloudinary} = require("./config/cloudinary");
require("dotenv").config();
const userRouter = require('./routes/userRoute')
const instructorRouter = require('./routes/instructorRoute')
const courseRouter = require('./routes/courseRoute')
const lessonRouter = require('./routes/lessonRoute')
const enrollmentRouter = require('./routes/enrollmentRoute')
const contactRouter = require('./routes/contactRoute');
const adminRouter = require("./routes/adminRoute");
const paymentRouter = require("./routes/paymentRoute");
const certificateRouter = require("./routes/certificateRoute");
const notificationRouter = require("./routes/NotificationRoute");


const app = express();
const port = process.env.PORT || 7000;

// Connect Database
connectDB()
connectCloudinary()


// Middlewares
app.use(express.json());
app.use(cors());


// API Endpoints
app.use("/api/user", userRouter);
app.use("/api/instructor", instructorRouter);
app.use("/api/course", courseRouter);
app.use("/api/lesson", lessonRouter);
app.use("/api/enrollment", enrollmentRouter);
app.use("/api/contact", contactRouter);
app.use('/api/admin', adminRouter)
app.use("/api/payment", paymentRouter);
app.use('/api/certificate', certificateRouter)
app.use('/api/notification', notificationRouter)



app.get("/", (req, res) => {
  res.send("EduHub API is Running...");
});

// Server
app.listen(port, () => {
  console.log(`Server Started on Port ${port}`);
});