const conexion = require('./connection');
const Connection = (port) => {
  try {
    conexion.connect();
    console.log(`Conexion exitosa a la base de datos.`);
  } catch (error) {
    console.log(error.message);
    console.log('No se pudo establecer la conexion con la base de datos.');
  }
};
module.exports = Connection;
