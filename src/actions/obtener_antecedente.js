const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose');

const obtener_antecedente = async function(param){
    if(param.tipo== 'st3'){
        const modelo = models['st7'];
        const antecedente_obtenido = await modelo.findOne({"Paciente.No_seguro":param.no_seguro,"Fecha_accidente":param.fecha_antecedente});
        return antecedente_obtenido;
    }else if(param.tipo == 'st3_rev'){
        const modelo = models['st3'];
        console.log(param.no_seguro);
        const antecedente_obtenido = await modelo.findOne({"Paciente.No_seguro":param.no_seguro},{"Antecedente.fecha_accidente":param.fecha_accidente});
        
        return "antecedente_obtenido";
    }else{
        return "aqui no hay nada";
    }
    
}

module.exports = obtener_antecedente;