const express = require("express");
const app = express();

let cors = require("cors");
const bodyParser = require("body-parser");
const taskRouter = require("./routes/tasks");
const mongoose = require("mongoose");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(taskRouter);


mongoose
    .connect(
        "mongodb+srv://Taura:taura1@cluster0.b9fybtx.mongodb.net/test"
    )
    .then(console.log("CONNECTED"))
    .catch((err) => {
        console.log("err", err);
    });

app.listen(8081, () => {
    console.log("Your app is alive!!!!!");
});