const models = require('./obtener_modelo');
const mongoose = require('mongoose')

const actualiza_st9 = function(id,params){
    const modelo = models[params.Tipo];
    const obtenido = await modelo.findOneAndUpdate({"_id":id},{"$set":{
        "Aceptado":params.aceptado,
        "Copia_entregada":params.copia_entregada,
        "Fecha_copia_entregada":params.fecha_copia_entregada
    }},{new:true});
    if(obtenido != null){
        return "Documento listo para continuar con el trámite!"
    }else{
        return "No se ha encontrado registro... Nada ha cambiado!"
    };
};

module.exports = actualiza_st9;