const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose')


// guarda un registro

const guardar_cita_reg = async (id, registro) => {
    
    var modelo = models['cita'];

    

   
    const aguardar1 = await modelo.findOneAndUpdate({"_id":id},{"St7":registro});/*
    const aguardar2 = await modelo.findOneAndUpdate({"_id":id},{"St7.Patron":registro.patron});
    const aguardar3 = await modelo.findOneAndUpdate({"_id":id},{"St7.Oci":registro.oci});
    */
    console.log(aguardar1);

};


module.exports = guardar_cita_reg;

/* updateOne({
        "_id":id
    },{
        "$push":{"St7":registro}
    },(err,result)=>{
        return result
    }); */