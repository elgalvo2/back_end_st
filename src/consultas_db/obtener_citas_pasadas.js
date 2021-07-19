const models = require('./obtener_modelo');
const mongoose = require('mongoose')



var obtener_citas_actuales = async() => {
    var modelo = models['cita'];

    const fecha_actual = new Date();
    fecha_actual.setHours(0,0,0);

    const citas_actuales = await modelo.find({"Fecha":{"$lt":fecha_actual}}); // futuro problemas con el front end  <<<<---------------- el fron end eviara un uso date new date devera ser una variable


    return (citas_actuales);

};

module.exports = obtener_citas_actuales;