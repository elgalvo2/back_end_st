const models = require('../consultas_db/obtener_modelo_conservacion');
const mongoose = require('mongoose');

// este script guarda el documento orden

const add_task = async function(params){
    try{
        const query ={
            "Folio":params.form.folio,
            "Fecha":params.form.fecha,
            "Descripcion": params.form.descripcion,
            "Area":params.form.area,
            "Tecnico":{
                "Nombre":params.form.tecnico,
            },
            "Materiales": params.list,
            "Realizado": params.form.realizado
        }
        const modelo = models['orden'];
        const documento = await modelo(query).save();

        return {
            'res':{
                'ok':true
            }
        };
    }catch(err){
        return{
            'res':{
                'ok':false
            }
        }
    }
    
 
};

module.exports = add_task;