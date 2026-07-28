const express = require('express')
const authUser = require('../middlewares/AuthUser')
const { createReview, getCourseReviews, deleteReview } = require('../controllers/reviewController')

const reviewRouter = express.Router()


reviewRouter.post('/add-review', authUser, createReview)
reviewRouter.get("/:courseId", getCourseReviews);
reviewRouter.post("/delete/:reviewId", authUser, deleteReview);
reviewRouter.get("/all", getAllReviews);


module.exports = reviewRouter