const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose')


// clase: base de datos a consultar
// param: parametro buscador de busqueda ejemplo -> {"Auo":"luis Galvez"} 
// datos: datos que actualizaran el campo ejemplo -> {"Cita": "datos de cita"}


const obtener_registros = async(param) => {

    if(param.tipo==='st8'){
        var modelo = models['st8_st7'];

        const documentos_obtenidos = await modelo.find({$and:[{"No_seguro":param.no_seguro},{"Archivo":"enviado a certificar"}]}); // consulta y guarda todos los documentos encontrados con el parametro args
         
        var modelo = models['st8_st9'];

        const documentos_obtenidos2 = await modelo.find({$and:[{"No_seguro":param.no_seguro},{"Archivo":"enviado a certificar"}]}); // consulta y guarda todos los documentos encontrados con el parametro args
    
        return [documentos_obtenidos, documentos_obtenidos2];
    }else{
        const modelo = models[param.tipo];

    const documentos_obtenidos = await modelo.find({$and:[{"No_seguro":param.no_seguro},{"Archivo":"enviado a certificar"}]}); // consulta y guarda todos los documentos encontrados con el parametro args
    

    return documentos_obtenidos;

    }
};

module.exports = obtener_registros;