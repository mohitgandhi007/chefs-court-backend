// connects backend with mongodb

const mongoose = require("mongoose");// mongoose is a library which is basically bridge between node.js and mongodb which used schema + model
//mongodb = raw data storage and mongoose = translator + manager

const connectDB = async () => { // connectDB is a function
  try {
    await mongoose.connect(process.env.MONGO_URI);//process.env.MONGO_URI- address of mongodb which comes from the .env file
    //mongoose.connect()
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:");
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;