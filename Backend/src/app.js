const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const cokkieParser = require("cookie-parser");
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200,
    Credential: true,
  })
);
app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));

app.use(cokkieParser());

module.exports = app;
