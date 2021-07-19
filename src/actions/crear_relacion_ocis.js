const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose');

const obtener_relacion_ocis = async function(){
    const model = models['oci'];
    const ocis_obtenidas = await model.find({"Archivo":"Oci en existencia"});
    return ocis_obtenidas;
};

module.exports = obtener_relacion_ocis;