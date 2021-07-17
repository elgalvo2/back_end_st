const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose');

const obtener_antecedente = async function(param){
    if(param.tipo== 'st3'){
        const modelo = models['st7'];
        const antecedente_obtenido = await modelo.findOne({"Paciente.No_seguro":param.no_seguro,"Fecha_accidente":param.fecha_antecedente});
        return antecedente_obtenido;
    }else if(param.tipo == 'st3_rev'){


        const modelo = models['st3'];
        
        const antecedente_obtenido = await modelo.findOne({"Paciente.No_seguro":param.no_seguro});
        return antecedente_obtenido;
    }else if(param.tipo == 'st4_rev'){


        const modelo = models['st4'];
        

        const antecedente_obtenido = await modelo.findOne({"Paciente.No_seguro":param.no_seguro});
    
        console.log(antecedente_obtenido);
        return antecedente_obtenido;

    }else if(param.tipo == 'st8' && param.tipo_antecedente=='st7'){

        const modelo = models['st7'];

        const antecedente_obtenido = await modelo.findOne({"Paciente.No_seguro":param.no_seguro,"Fecha_accidente":param.fecha_antecedente});

        return antecedente_obtenido
    }else if(param.tipo == 'st8' && param.tipo_antecedente=='st9'){

        const modelo = models['st9'];

        const antecedente_obtenido = await modelo.findOne({"Paciente.No_seguro":param.no_seguro,"Fecha_primera_consulta":param.fecha_antecedente});

        return antecedente_obtenido
    }else{
        return "No definido modelo para busqueda de antecedente";
    } 
    
    
}

module.exports = obtener_antecedente;