const express = require('express');
const bodyParser = require('body-parser');
const { fn } = require('sequelize');
const app = express();

const clientesRoute = require('./routes/clientes');
const userRoute = require('./routes/user')


app.use(bodyParser.json());    

app.use("/clientes", clientesRoute);
app.use("/user",userRoute);


module.exports = app;
