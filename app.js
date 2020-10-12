const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(express.json()); //enable json to be parsed via the body of the post request

//Import Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);




//Connect To DB
mongoose.connect(
    process.env.DB_CONNECTION,  //<---This DB_CONNECTION IS DEFINED IN .env file. It's used to hide the user and password data
    { useNewUrlParser: true }, 
    ()=> console.log("connected to DB!")
);

//How do we start listening to the server
app.listen(3000);

