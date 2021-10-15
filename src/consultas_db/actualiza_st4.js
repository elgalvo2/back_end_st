const models = require('./obtener_modelo');
const mongoose = require('mongoose')

const actualiza_st4 = function(id,params){
    console.log(params.tipo);
    const modelo = models[params.tipo];
    var obtenido=null;

    if(params.aceptado){
        if(params.toSend){
            obtenido = await modelo.findOneAndUpdate({"_id":id},{"$set":{
                "Aceptado": params.aceptado,
                "Fecha_realizacion":params.fecha_realizacion,
                "Archivo":'Documento enviado a CEST...En espera de dictamen',
            }},{new:true});
        }else{
            obtenido = await modelo.findOneAndUpdate({"_id":id},{"$set":{
                "Aceptado": params.aceptado,
                "Fecha_realizacion":params.fecha_realizacion,
                "Archivo":'En espera de dictamen',
            }},{new:true});
        }
    }else{
        obtenido = await modelo.findOneAndUpdate({"_id":id},{"$set":{
            "Aceptado": params.aceptado,
            "Fecha_realizacion":params.fecha_realizacion,
            "Archivo":'Caso negado',
        }},{new:true});
    }
    
    
    if(obtenido != null){
        return {
            res:{
                success:true,
                data: obtenido,
            }
        }
    }else{
        return {
            res:{
                success:false,
                message: 'no se encontró registro',
            }
        }
    };
};

module.exports = actualiza_st4;