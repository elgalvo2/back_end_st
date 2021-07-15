const models = require('../consultas_db/obtener_modelo');
const buscar_id = require('../consultas_db/buscar_id');
const mongoose = require('mongoose');

const actualizar_documento = async function(clase,param){

    const cita_encontrada = await buscar_id(clase,param);
    
    if(cita_encontrada.Tipo == "st3"){
        return cita_encontrada.St3;

    }else if(cita_encontrada.Tipo == "st3_rev"){
        return cita_encontrada.St3_rev;

    }else if(cita_encontrada.Tipo == "st4"){
        return cita_encontrada.St4;

    }else if(cita_encontrada.Tipo == "st4_rev"){
        return cita_encontrada.St4_rev;

    }else if(cita_encontrada.Tipo == "st6"){
        return cita_encontrada.St6;

    }else if(cita_encontrada.Tipo == "st7"){
        return cita_encontrada.St7;

    }else if(cita_encontrada.Tipo == "st8"){
        return cita_encontrada.St8;

    }else if(cita_encontrada.Tipo == "st9"){
        return cita_encontrada.St9;
    
    }else{
        return[{status:"otra cosa"}];
    };
}

module.exports= actualizar_documento;