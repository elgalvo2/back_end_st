const models = require('../consultas_db/obtener_modelo');
var guardar_registro = require('../consultas_db/guardar_registro');
const mongoose = require('mongoose');

const ingresar_st7 = async function(param){
    
    var crear_oci = require('../actions/crear_oci');
    const oci = crear_oci(param);
    //oci.setSerie(d_documento.serie);
    oc = oci.muestra_todo();

    const crear_patron = require('../actions/crear_patron');
    const patron = crear_patron(param);
    pat = patron.muestra_todo();
    
    var crear_paciente = require('../actions/crear_paciente');
    const paciente = crear_paciente(param);
    d_paciente = paciente.muestra_todo();
        
       

    const St7 = require('../actions/crear_st7');
    var st7_creada = St7(param, d_paciente, pat, oc);
    st7_creada.setArchivo("st7 no reclamadas");

    
    const datos_st7_creada = st7_creada.muestra_todo();
    console.log(datos_st7_creada);
    const guardados = await guardar_registro(param.tipo, datos_st7_creada);


    return guardados;
    
};

module.exports = ingresar_st7;