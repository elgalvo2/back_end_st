const models = require('../consultas_db/obtener_modelo');
const buscar_id = require('../consultas_db/buscar_id');
const mongoose = require('mongoose');

const actualizar_documento = async function(clase,param){

    const cita_encontrada = await buscar_id(clase,param);
    

    return cita_encontrada.St3;
    
}

module.exports= actualizar_documento;