const schemas = require('../models/conservacion');
const mongoose = require('mongoose');

let modelos = [];
modelos['material'] = schemas.material_model;
modelos['tecnico'] = schemas.tecnico_model;
modelos['orden'] = schemas.orden_model;


/*function obtener_modelo(param){
    const params = param || 'st-7';
    return modelos[params];
};*/

module.exports = modelos;