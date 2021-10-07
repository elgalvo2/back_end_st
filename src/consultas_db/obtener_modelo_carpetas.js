const models = require('../models/carpetas');
const mongoose = require('mongoose');

let modelos = [];
modelos['A-E-I-O-U'] = models.a_e_i_o_u;
modelos['B-F'] = models.b_f;

modelos['G-K'] = models.g_k;
modelos['L-N'] = models.l_n;


modelos['Ñ-R'] = models.ñ_r;

modelos['S-V'] = models.s_v;

modelos['W-Z'] = models.w_z;
/*function obtener_modelo(param){
    const params = param || 'st-7';
    return modelos[params];
};*/

module.exports = modelos;