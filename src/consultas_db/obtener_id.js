const models = require('obtener_modelo');
const mongoose = require('mongoose')


// clase: base de datos a consultar
// param: parametro buscador de busqueda ejemplo -> {"Auo":"luis Galvez"} 
// datos: datos que actualizaran el campo ejemplo -> {"Cita": "datos de cita"}


var obtener_id = async(clase, param) => {
    var modelo = models(clase);

    var documents_array = modelo.find(param).then(() => { // consulta y guarda todos los documentos encontrados con el parametro args
        console.log("Se han encontrado registros...");
        mongoose.disconnect();
    });

    const cantidad = await documents_array.length;
    let ids = new Array(cantidad);
    if (cantidad === 0) {
        console.log("No hay registros con esos parametros...");
        return 1;
    } else {
        for (var i = 0; i < cantidad; i++) {
            ids[i] = documents_array[i]._id;
        };
        return ids;
    };

    // una function alterna

    /*
    const cantidad = await documents_array.length;
    (async function(cantidad){
        let ids = new Array(cantidad);
    if (cantidad === 0) {
        console.log("No hay registros con esos parametros...");
        return 1;
    } else {
        for (var i = 0; i < cantidad; i++) {
            ids[i] = documents_array[i]._id;
        };
        return ids;
    };
    })()
    */

};

module.exports = obtener_id;