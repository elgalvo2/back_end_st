const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose')


// guarda un registro

const guardar_cita_reg = async (id, registro) => {
    
    var modelo = models['cita'];

    const aguardar1 = await modelo.findOneAndUpdate({"_id":id},{"St7":registro});
    console.log('Documento guardado en la cita');


};


module.exports = guardar_cita_reg;