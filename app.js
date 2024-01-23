const express = require('express');
const bodyParser = require('body-parser')
const postRoutes = require("./routes/post")
const app = express();

app.use(bodyParser.json());

// Mounting postRoutes under /posts
app.use("/posts", postRoutes);

module.exports = app;
