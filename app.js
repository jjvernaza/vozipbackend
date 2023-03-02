const express = require('express');
const { fn } = require('sequelize');
const app = express();

const postsRoute = require('./routes/posts');
app.use("/posts", postsRoute);

module.exports = app;
