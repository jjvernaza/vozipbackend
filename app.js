const express = require('express');
const bodyParser = require('body-parser');
const { fn } = require('sequelize');
const app = express();

const clientesRoute = require('./routes/clientes');


app.use(bodyParser.json());    

app.use("/clientes", clientesRoute);

module.exports = app;
