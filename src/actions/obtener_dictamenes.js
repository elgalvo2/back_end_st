const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose')


// clase: base de datos a consultar
// param: parametro buscador de busqueda ejemplo -> {"Auo":"luis Galvez"} 
// datos: datos que actualizaran el campo ejemplo -> {"Cita": "datos de cita"}


var obtener_todo = async() => {
    var modelo = models['st3'];
    const aguardar1 = await modelo.find({"Archivo":"listo para entrega de dictamen"});
    console.log(aguardar1);
    var modelo = models['st3_rev'];
    const aguardar2 = await modelo.find({"Archivo":"listo para entrega de dictamen"});

    var modelo = models['st4'];
    const aguardar3 = await modelo.find({"Archivo":"listo para entrega de dictamen"});

    var modelo = models['st4_rev'];
    const aguardar4 = await modelo.find({"Archivo":"listo para entrega de dictamen"});

    let todo = [];

    todo = [ ...aguardar1, ...aguardar2, ...aguardar3, ...aguardar4];


    return todo;

};

module.exports = obtener_todo;