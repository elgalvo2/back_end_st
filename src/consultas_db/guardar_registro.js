const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose')


// guarda un registro

const guardar_registro = async (clase, registro,aux) => {
   
    if(clase == 'st8'){
        if(aux == 'st7'){
            var modelo = models['st8_st7'];
            const aguardar = await modelo(registro).save();
            return "se ha guardado el documento st8_st7 a la base de datos";
        }else if(aux == 'st9'){
            var modelo = models['st8_st9'];
            const aguardar = await modelo(registro).save();
            return "se ha guardado el documento st8_st7 a la base de datos";
        }else {
            return "No se ha llegado a una conclusión"
        }
    }else{
        var modelo = models[clase];
        const aguardar = await modelo(registro).save();
        return "se ha guardado el documento a la base de datos";
    };

    

};


module.exports = guardar_registro;