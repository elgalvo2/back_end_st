const models = require('./obtener_modelo');
const mongoose = require('mongoose')

const consulta_actualiza = function(id,params){
    const modelo = models[params.Tipo];
    const obtenido = await modelo.findOneAndUpdate({"_id":id},{"$set":{
        "Accidente_trayecto":params.accidente_trayecto,
        "Firma_trabajador":params.firma_trabajador,
        "Copia_entregada":params.copia_entregada,
        "Fecha_copia_entregada":params.fecha_copia_entregada,
        "Aceptado":params.aceptado,
        "St1":params.st1,
        "St2":params.st2
    }},{new:true});
    if(obtenido != null){
        return "Documento listo para continuar con el trámite!"
    }else{
        return "No se ha encontrado registro... Nada ha cambiado!"
    };
};

module.exports = consulta_actualiza;