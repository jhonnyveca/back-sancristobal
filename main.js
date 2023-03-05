const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Connection = require('./config/database');

const app = express();
const port = process.env.PORT || 3000;

//TODO : ---middlewares---
app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(express.json());
//TODO: ---Rutas---
app.use('/api/v1', require('./src/routes'));

//TODO: ---mysql connection---
Connection(port);
/* CountUser() */
app.listen(port, () => console.log('Servidor escuchando por el puerto', port));
