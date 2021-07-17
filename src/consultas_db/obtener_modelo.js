const schemas = require('../models/models_bd');
const mongoose = require('mongoose');

let modelos = [];
modelos['paciente'] = schemas.paciente_model;
modelos['oci'] = schemas.oci_model;
modelos['patron'] = schemas.patron_model;
modelos['st3'] = schemas.st3_model;
modelos['st3_rev'] = schemas.st3_rev_model;
modelos['st4'] = schemas.st4_model;
modelos['st4_rev'] = schemas.st4_rev_model;
modelos['st6'] = schemas.st6_model;
modelos['st7'] = schemas.st7_model;
modelos['st8'] = schemas.st8_model;
modelos['st9'] = schemas.st9_model;
modelos['cita'] = schemas.cita_model;

/*function obtener_modelo(param){
    const params = param || 'st-7';
    return modelos[params];
};*/

module.exports = modelos;