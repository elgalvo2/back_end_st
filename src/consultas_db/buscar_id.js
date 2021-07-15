const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose');

const buscar_id = async function(clase, args) {

    var modelo = models[clase];
    const resultado = await modelo.findById(args);
    console.log(resultado);

    return resultado;


};

module.exports = buscar_id;