const models = require('../models/models_carpetas');
const mongoose = require('mongoose');
const folder_namer = require('./folder_namer')

// primero es neceario definir el nombre de la carpeta donde se gardará el doct.
// esta script consulta las carpetas existentes.... con el tipo de documento
// realiza una cnsulta sobre la carpeta actual

const gestor_carpetas = async (params)=>{

    console.log('Parmetros consulta guardar certificado', params)

    const namer = folder_namer(params[0].apellido);
    if(namer.res.ok){
        const modelo = models;
        const cant_documentos = await modelo.find({$and:[{"Tipo":params.tipo,"Llena":false}]}); // busca si existe carpeta disponible

        if(cant_documentos.length === 0){
            const cant_carp = await modelo.find({"Tipo":params.tipo,"Llena":true}); // cuantas carpetas llenas hay
            const label = namer.res.etiqueta+' '+(cant_carp.length + 1).toString();
            console.log('Etiqueta nombre' , label);
            const carpeta = await modelo({
                "Tipo":params[0].tipo,
                "Titulo": label,
                "Cantidad":1,
            }).save();
            console.log('carpeta guardada',carpeta)
            if(carpeta.nInserted === 1){
                const actualizacion = models[params.tipo].findOneAndUpdate({"_id":params.id},{"$set":{"Archivo":label
            }},{new:true});
                
                return{
                    "res":{
                        "ok":true,
                        "etiqueta":label,
                    }
                }
            }else{
                return{
                    "res":{
                        "ok":false,
                        "error":"no se inserto dato en carpeta"
                    }
                }
            }
            return{
                "res":{

                }
            }
        }
    }
}

module.exports = gestor_carpetas;