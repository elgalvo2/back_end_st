const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose')


// guarda un registro

const guardar_cita_reg = async (id, registro) => {
    
    var modelo = models['cita'];
    if(registro.Tipo == 'st7'){

        await modelo.findOneAndUpdate({"_id":id},{"St7":registro});
        return "St7 agregado al registro de la cita"

    }else if(registro.Tipo == 'st6'){

        await modelo.findOneAndUpdate({"_id":id},{"St6":registro});
        return "St6 agregado al registro de la cita";

    }else if(registro.Tipo == 'st9'){

        await modelo.findOneAndUpdate({"_id":id},{"St9":registro});
        return "St9 agregado al registro de la cita";

    }else if(registro.Tipo == 'st3'){

        await modelo.findOneAndUpdate({"_id":id},{"St3":registro});
        return "St3 agregado al registro de la cita";

    }else if(registro.Tipo == 'st3_rev'){
        await modelo.findOneAndUpdate({"_id":id},{"St3_rev":registro});
        return "St3_rev agregado al registro de la cita";

    }else if(registro.Tipo == 'st4'){
        await modelo.findOneAndUpdate({"_id":id},{"St4":registro});
        return "St4 agregado al registro de la cita";

    }else if(registro.Tipo == 'st4_rev'){
        await modelo.findOneAndUpdate({"_id":id},{"St4_rev":registro});
        return "St4_rev agregado al registro de la cita";
    }else if(registro.Tipo == 'st8'){
        await modelo.findOneAndUpdate({"_id":id},{"St8":registro});
        return "St8 agregado al registro de la cita";

    };
    
    
    


};


module.exports = guardar_cita_reg;