const express = require('express')
const authUser = require('../middlewares/AuthUser')
const { generateCertificate, getCertificate } = require('../controllers/certificateController')


const certificateRouter = express.Router()


certificateRouter.post('/generate' , authUser, generateCertificate)

certificateRouter.get("/:courseId", authUser, getCertificate);



module.exports = certificateRouter
