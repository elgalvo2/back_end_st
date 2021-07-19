const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose');

const obtener_relacion_documentos = async function(){
    var model = models['st7'];
    const docst7 = await model.find({"Oci.Archivo":""});
    model = models['st9'];
    const docst9 = await model.find({"Oci.Archio":""});
    const todo = docst7.concat(docst9);
    return todo;
};

module.exports = obtener_relacion_documentos;