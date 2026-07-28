const jwt = require("jsonwebtoken");

const authInstructor = async (req, res, next) => {
  try {
    const { itoken } = req.headers;

    if (!itoken) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized. Please login again.",
      });
    }

    const tokenDecoded = jwt.verify(
      itoken,
      process.env.JWT_SECRET
    );

    req.instructorId = tokenDecoded.id;

    next();
  } catch (error) {
    console.log(error);

    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = authInstructor;
