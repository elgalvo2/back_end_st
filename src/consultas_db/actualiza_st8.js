const models = require('./obtener_modelo');
const mongoose = require('mongoose')

const actualiza_st8 = function(id,params){
    var modelo = models['st8_st7'];
    var obtenido = await modelo.findOneAndUpdate({"_id":id},{"$set":{
        "Se_acepta_recaida":params.aceptado,
        "Copia_entregada":params.copia_entregada,
        "Fecha_copia_entregada":params.fecha_copia_entregada
    }},{new:true});

    if(obtenido == null){
        var modelo = models['st8_st9'];
        obtenido = await modelo.findOneAndUpdate({"_id":id},{"$set":{
            "Se_acepta_recaida":params.aceptado,
            "Copia_entregada":params.copia_entregada,
            "Fecha_copia_entregada":params.fecha_copia_entregada
        }},{new:true});
        if(obtenido == null){
            return "Nada ha cambiado"; 
        }else{
            return "documento listo para continuar ocn el trámite!";
        }
    }else{
        return "Documento listo para continuar con el trámite!";
    }
};

module.exports = actualiza_st8;