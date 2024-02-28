require("dotenv").config();
const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});
const mongoose = require("mongoose");

const connection = mongoose.connect(process.env.MONGO_URI)
    .then(() => {console.log("success")})
    .catch((err) => {console.log(`Some Error occured. ${err}`)});
module.exports = { connection };