const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose')

const actualizar_oci = async function(registro){
    const model = models['oci'];
    const actualizado = model.findOneAndUpdate({"_id":registro._id},{"$set":{"Archivo":"oci relacionada"
    }},{new:true});
    return actualizado;
};

module.exports = actualizar_oci;
