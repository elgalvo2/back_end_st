const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose');

const consulta_modifica = async function(tipo,id,documento){
    const modelo = models[tipo];
    const doc_modificado = await modelo.findOneAndUpdate({"_id":id},{"$set":{"Oci.Archivo":"oci relacionada"}},{new:true});

    return doc_modificado;
};

module.exports = consulta_modifica;