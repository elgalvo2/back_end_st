const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose')

const eliminar_cita = async(id)=>{
    var modelo = models['cita'];
    console.log(id)
    const borrado = await modelo.deleteOne({"_id":id});
    if(borrado.deletedCount===1){
        return {
            'res':{
                "status":'cita eliminada',
                'ok':true,
            }
        }
    }else{
        return {
            'res':{
                'status':'No se eliminĂ³ nada',
                'ok':false,
            }
        }
    }
    
}

module.exports = eliminar_cita;