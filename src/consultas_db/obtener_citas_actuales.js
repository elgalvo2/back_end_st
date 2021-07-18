const models = require('./obtener_modelo');
const mongoose = require('mongoose')


// clase: base de datos a consultar
// param: parametro buscador de busqueda ejemplo -> {"Auo":"luis Galvez"} 
// datos: datos que actualizaran el campo ejemplo -> {"Cita": "datos de cita"}


var obtener_citas_actuales = async() => {
    var modelo = models['cita'];

    const fecha_actual = new Date();
    fecha_actual.setHours(0,0,0);

    const citas_actuales = await modelo.find({"Fecha":{"$gte":fecha_actual}}); // futuro problemas con el front end  <<<<---------------- el fron end eviara un uso date new date devera ser una variable


    return (citas_actuales);


    //var id_citas_pasadas = modelo.find({},{_id:1}).map
    //const aguardar = await modelo.find({},_id:);
    
    

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

module.exports = obtener_citas_actuales;