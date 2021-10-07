const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose');



const ingresar_oci = async function(param){

    const modelo = models['oci'];

    const query = {"No_seguro":param.no_seguro,"Serie":param.serie};
    
    const oci_encontrada = await modelo.findOne(query);
    console.log('oci encontrada', oci_encontrada)
    if(oci_encontrada!=null){
        const nom = param.nombre+' '+param.apellido;
        const oci_actualizada = await modelo.findOneAndUpdate({'_id':oci_encontrada._id},{
            'Nombre_paciente': nom,
            'Archivo': 'oci en existencia',

        },{new:true});

        return {
            'res':{
                'respuesta':'se ha actualizado oci',
                'oci': oci_actualizada,
                'ok':true
            }
        }
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