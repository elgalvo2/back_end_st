const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose')


// clase: base de datos a consultar
// param: parametro buscador de busqueda ejemplo -> {"Auo":"luis Galvez"} 
// datos: datos que actualizaran el campo ejemplo -> {"Cita": "datos de cita"}


var obtener_todo = async(clase) => {
    if(clase==='st8'){
        var modelo = models['st8_st7'];
        const aguardar = await modelo.find();
        modelo = models['st8_st9'];
        const aguardar2 = await modelo.find();
        const todo = aguardar.concat(aguardar2);
        return todo;
    }else{
        var modelo = models[clase];
        const aguardar = await modelo.find();
        return aguardar
    }
    
};

module.exports = obtener_todo;