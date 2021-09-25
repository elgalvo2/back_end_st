const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose');

const obtener_relacion = async function(tipo, id){

    const obtenido = await models[tipo].findOneAndUpdate({"_id":id},{'Archivo':'enviado a certificar'},{new:true});
   
    console.log('obtenido envio a certificacion ', obtenido)
    if(obtenido!=null){
        return {
            'res':{
                'respuesta':'se actualizo el documento',
                'ok':true,
            }
        }
    }else{
        return{
            'res':{
                'respuesta':'no se actualizo el documento, ocurrio un error con la consulta',
                'ok':false,
            }
        }
    }
}

module.exports = obtener_relacion;