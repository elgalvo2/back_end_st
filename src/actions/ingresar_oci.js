const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose');

const modelo = models['oci'];

const ingresar_oci = async function(param){

    const query = {"No_seguro":param.no_seguro,"Serie":param.serie};
    
    const oci_encontrada = await modelo.findOne(query);
    if(oci_encontrada!=null){
        const oci_actualizada = await modelo.findOneAndUpdate({
            
            Archivo: 'oci en existencia',

        },{new:true});
    }else{
        
        var crear_oci = require('../actions/crear_oci');
        const oci = crear_oci(param);
        oci.setArchivo("oci en existencia");
        oc = oci.muestra_todo();

        const oci_guardada = await modelo(oc).save();

        return {
            'res':{
                'respuesta':'se ha creado una oci nueva',
                'oci':oci_guardada,
                'ok':true,
            }
        };
    };
};

module.exports = ingresar_oci;