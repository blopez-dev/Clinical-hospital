const express = require("express");
const { connection } = require("./config/db");
require("dotenv").config();
const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("Connected to DB");
    } catch (error) {
        console.log("Unable to connect to DB");
        console.log(error);
    }
    console.log(`Listening at port ${process.env.PORT}`);
});