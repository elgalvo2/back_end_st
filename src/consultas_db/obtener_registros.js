const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose')


// clase: base de datos a consultar
// param: parametro buscador de busqueda ejemplo -> {"Auo":"luis Galvez"} 
// datos: datos que actualizaran el campo ejemplo -> {"Cita": "datos de cita"}


const obtener_registros = async(clase, param) => {
    const modelo = models[clase];

    const documentos_obtenidos = await modelo.find({$and:[{"No_seguro":param},{"Archivo":"oci en existencia"}]}); // consulta y guarda todos los documentos encontrados con el parametro args
    

    return documentos_obtenidos;

};

module.exports = obtener_registros;