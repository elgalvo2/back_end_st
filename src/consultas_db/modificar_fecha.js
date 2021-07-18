const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose');

const buscar_id = async function(clase, params ,args) {

    var modelo = models[clase];
    const documento_actualizado = await modelo.findOneAndUpdate({"_id":params},{"$set":{"Fecha":args.fecha,"Hora":args.hora, "Auo":args.auo}},{returnNewDocument:true});

    return documento_actualizado;


};

module.exports = buscar_id;