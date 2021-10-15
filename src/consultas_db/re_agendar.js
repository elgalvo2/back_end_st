const models = require('./obtener_modelo');
const mongoose = require('mongoose')



var re_agendar = async(id, fecha) => {
    var modelo = models['cita'];

    const citas_actuales = await modelo.findOneAndUpdate({'_id':id},{'Fecha':fecha},{new:true}); // futuro problemas con el front end  <<<<---------------- el fron end eviara un uso date new date devera ser una variable

    console.log('cita reagendada', citas_actuales)

    if(citas_actuales != null){
        return true;
    }else{
        return false;
    };

};

module.exports = re_agendar;