const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose')


// guarda un registro

const guardar_registro = async (clase, registro,aux) => {
    var a_aux = aux ? aux : "";  
    console.log(a_aux);
    if(clase == 'st8'){
        if(a_aux == 'st7'){
            var modelo = models['st8_st7'];
            const aguardar = await modelo(registro).save();
            return aguardar;
        }else if(a_aux === 'st9'){
            var modelo = models['st8_st9'];
            const aguardar = await modelo(registro).save();
            console.log(aguardar);
            return aguardar;
        }else {
            return "No se ha llegado a una conclusión"
        }
    }else{
        var modelo = models[clase];
        const aguardar = await modelo(registro).save();
        return aguardar;
    };

    

};


module.exports = guardar_registro;