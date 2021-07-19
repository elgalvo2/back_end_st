const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose')


// clase: base de datos a consultar
// param: parametro buscador de busqueda ejemplo -> {"Auo":"luis Galvez"} 
// datos: datos que actualizaran el campo ejemplo -> {"Cita": "datos de cita"}


var obtener_todo = async(clase) => {
    var modelo = models[clase];
    const aguardar = await modelo.find();
    return aguardar;

};

module.exports = obtener_todo;