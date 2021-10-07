const models = require('../consultas_db/obtener_modelo_conservacion');
const mongoose = require('mongoose');

// este script guarda el documento orden

const get_tasks = async function(params){
    try{
        const modelo = models['orden'];
        const tasks = await modelo.find({'Realizado':false});
        console.log(tasks)

        return {
            'res':{
                'tasks':tasks,
                'ok':true,
            }
        };
    }catch(err){
        console.log(err);
        return{
            'res':{
                'ok':false
            }
        }
    }
    
 
};

module.exports = get_tasks;