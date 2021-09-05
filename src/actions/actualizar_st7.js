const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose')


// clase: base de datos a consultar
// param: parametro buscador de busqueda ejemplo -> {"Auo":"luis Galvez"} 
// datos: datos que actualizaran el campo ejemplo -> {"Cita": "datos de cita"}


const actualizar_st7 = async(clase, param,oci) => {
    const modelo = models[clase];

    console.log('param',param);
    console.log('oci',oci);

    const filter = {
        '_id':param,
    };
    
    const update = {
        'Archivo':'listo para envio a certificacion',
        'Oci':oci,
    }
        

    const documentos_obtenidos = await modelo.updateOne(filter,{'$set':update},{new:true}); // consulta y guarda todos los documentos encontrados con el parametro args
    
    if(documentos_obtenidos!=null){
        return {
            'res':{
                'respuesta':'oci relacionada',
                'st7':documentos_obtenidos,
                'ok':true
            }
        }
    }else{
        return {
            'res':{
                'respuesta':'ocurrio un error con la actualizacion de la st7',
                'id':param,
                'st7':documentos_obtenidos,
                'ok':false
            }
        }
    }
    

};

module.exports = actualizar_st7;