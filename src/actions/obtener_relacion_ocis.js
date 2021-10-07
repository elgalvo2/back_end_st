const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose')


// clase: base de datos a consultar
// param: parametro buscador de busqueda ejemplo -> {"Auo":"luis Galvez"} 
// datos: datos que actualizaran el campo ejemplo -> {"Cita": "datos de cita"}


const obtener_relacion_ocis = async(clase, param) => {
    const modelo = models[clase];

    console.log('param',param);

    const filter = {
        'Serie':param,
        'Archivo':'oci en existencia'
    };
    const update = {
        'Archivo':'oci relacionada a st7'
    };

    const documentos_obtenidos = await modelo.findOneAndUpdate(filter,update,{new:true}); // consulta y guarda todos los documentos encontrados con el parametro args
    console.log('DOCUEMNTOS BTENIDOS RELACION OCI',documentos_obtenidos);
    if(documentos_obtenidos!=null){
        return {
            'res':{
                'respuesta':'oci relacionada',
                'oci':documentos_obtenidos,
                'ok':true
            }
        }
    }else{
        return {
            'res':{
                'respuesta':'oci no relacionada',
                'oci':param,
                'ok':false
            }
        };
    };
    

};

module.exports = obtener_relacion_ocis;