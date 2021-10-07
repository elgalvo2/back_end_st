const models = require('../consultas_db/obtener_modelo_carpetas');
const schemas = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose');
const folder_namer = require('./folder_namer')

// primero es neceario definir el nombre de la carpeta donde se gardará el doct.
// esta script consulta las carpetas existentes.... con el tipo de documento
// realiza una cnsulta sobre la carpeta actual

const gestor_carpetas = async (params)=>{

    const saved = [];

    params.map(async (el)=>{
        const namer = folder_namer(el.apellido);
        if(namer.res.ok){
            const modelo = models[namer.res.etiqueta];
            const cant_documentos = await modelo.find({"Tipo":el.tipo,"Llena":false}); // busca si existe carpeta disponible
            
    
            if(cant_documentos.length === 0){
                const cant_carp = await modelo.find({"Tipo":el.tipo,"Llena":true}); // cuantas carpetas llenas hay
                const label = namer.res.etiqueta+' '+(cant_carp.length + 1).toString();
                console.log('Etiqueta nombre' , label);
                const carpeta = await modelo({
                    "Tipo":el.tipo,
                    "Titulo": label,
                    "Cantidad_archivados":1,
                }).save();
    
                if(carpeta.length != 0){
                    const model = schemas[el.tipo]
                    const updated = await model.updateOne({'_id':el.id},{'Archivo':label})
                    if(updated != null){
                        saved.push({
                            "res":{
                                "ok":true,
                                "mensaje":"Se actualizo archivo y contador de carpeta"
                            }
                        }) 
                    }else{
                        saved.push({
                            "res":{
                                "ok":false,
                                "mensaje":"ocurrio un error",
                            }
                        })
                    }
                }else{
                    saved.push({
                        "res":{
                            "ok":false,
                            "mensaje":"fallo al crear carpeta contenedora", 
                        }
                    })
                }
    
            }else{
                const cant_carp = await modelo.find({"Tipo":el.tipo,"Llena":true}); // cuantas carpetas llenas hay
                const folder = await modelo.find({"Tipo":el.tipo,"Llena":false});
    
                console.log('folder',folder)
                const label = namer.res.etiqueta+' '+(cant_carp.length + 1).toString();
                
                const canti = folder[0].Cantidad_archivados;
                console.log(canti);
                const actualizado = await modelo.findOneAndUpdate({"_id":folder[0]._id},{"Cantidad_archivados":canti+1},{new:true});
                console.log('actualizado',actualizado);
                if(actualizado != null){
                    const model = schemas[el.tipo]
                    const updated = await model.findOneAndUpdate({'_id':el.id},{'Archivo':label})
                    if(updated != null){
                        return {
                            "res":{
                                "ok":true,
                                "mensaje":"Se actualizo archivo y contador de carpeta"
                            }
                        }
                    }else{
                        return{
                            "res":{
                                "ok":false,
                                "mensaje":"ocurrio un error",
                            }
                        }
                    }
                }
                else{
                    return{
                        "res":{
                            "ok":false,
                            "mensaje":"fallo incremento a cotnador de carpeta"
                        }
                    }
                }
    
            }
        }

        console.log('Parmetros consulta guardar certificado', params)
 

    

    console.log('Etiqueta de name',namer);

    })

    
    

}

module.exports = gestor_carpetas;