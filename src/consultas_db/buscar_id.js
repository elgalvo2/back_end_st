const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose')

const buscar_id = async function(clase, args) {

    var modelo = models[clase];
    const resultado = await modelo().find(args);

    const comprobar = resultado;


};

module.exports = buscar_id;