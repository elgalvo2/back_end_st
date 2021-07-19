const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose');



const ingresar_dictamen = async function(params){
    const modelo = models[params.tipo];
    const documento = await modelo.findOneAndUpdate({"Paciente.No_seguro":params.no_seguro},{"$set":{"Archivo":"listo para entrega de dictamen"}},{new:true});
    return documento;
};

module.exports = ingresar_dictamen;