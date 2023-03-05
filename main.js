const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Connection = require('./config/database');

const app = express();
const port = process.env.PORT || 3000;

//TODO : ---middlewares---
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:7858');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(express.json());
//TODO: ---Rutas---
app.use('/api/v1', require('./src/routes'));

//TODO: ---mysql connection---
Connection(port);
/* CountUser() */
app.listen(port, () => console.log('Servidor escuchando por el puerto', port));
