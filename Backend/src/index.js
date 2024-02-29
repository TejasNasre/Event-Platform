const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const connect = require("./db/index.js")
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});


connect()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port http://localhost:${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log(err)
})

