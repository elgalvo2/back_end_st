const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose');

const buscar_id = async function(clase, args) {
    console.log('args',args);
    try{
        if(clase == 'st8'){
            var modelo = models['st8_st7'];
            const resultado = await modelo.findById(args);

            if(!resultado){
                var modelo2 = models['st8_st9'];
                const resultado2 = await modelo2.findById(args);
                console.log('resultado2', resultado2);
                return resultado2;
            }else{
                console.log('resultado',resultado)
                return resultado;
            }
            
        }else{
            var modelo = models[clase];
            const resultado = await modelo.findById(args);

            return resultado;
        }
        
    

    }catch(err){
        console.log(err);
    }
    

};

module.exports = buscar_id;