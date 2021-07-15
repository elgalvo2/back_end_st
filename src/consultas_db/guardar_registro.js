const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose')


// guarda un registro

const guardar_registro = async (clase, registro) => {

    var modelo = models[clase];
    const aguardar = await modelo(registro).save();

    return aguardar;

};


module.exports = guardar_registro;