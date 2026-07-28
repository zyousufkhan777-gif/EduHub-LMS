const bcrypt = require("bcrypt");
const adminModel = require('./models/AdminModel')
const  connectDB  = require('./config/mongodb')
require("dotenv").config();


const createAdmin = async () => {
  try {

    await connectDB();


    const exists = await adminModel.findOne({
      email: "admin@gmail.com"
    });


    if (exists) {
      console.log("Admin already exists");
      process.exit();
    }


    const hashedPassword = await bcrypt.hash(
      "123456",
      10
    );


    const admin = await adminModel.create({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashedPassword,
    });


    console.log("Admin created successfully");
    console.log(admin);


    process.exit();


  } catch (error) {

    console.log(error);
    process.exit();

  }
};


createAdmin();

