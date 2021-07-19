const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose');

const obtener_relacion = async function(){

    const relacion_st7_obtenida = await models['st7'].find({"Aceptado":"si"});
    const relacion_st9_obtenida = await models['st9'].find({"Aceptado":"si"});

    


}