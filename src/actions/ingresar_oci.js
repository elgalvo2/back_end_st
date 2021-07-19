const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose');

const modelo = models['oci'];

const ingresar_oci = async function(param){
    
    var crear_oci = require('../actions/crear_oci');
    const oci = crear_oci(param);
    oci.setArchivo("oci en existencia");
    oc = oci.muestra_todo();

    const oci_guardada = await modelo(oc).save();

    return oci_guardada;
    
};

module.exports = ingresar_oci;