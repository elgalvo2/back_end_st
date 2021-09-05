const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose')


// clase: base de datos a consultar
// param: parametro buscador de busqueda ejemplo -> {"Auo":"luis Galvez"} 
// datos: datos que actualizaran el campo ejemplo -> {"Cita": "datos de cita"}


const obtener_registros = async(param) => {
    const modelo = models['st7'];

    const query = {"Paciente.No_seguro":param,
    "Archivo":"st7 no reclamadas"}

    const documentos_obtenidos = await modelo.findOne(query); 
        
        
        
        // consulta y guarda todos los documentos encontrados con el parametro args
        console.log('doc obtenidos',documentos_obtenidos);
    if(documentos_obtenidos!=null){
        return{
            'res':{
                'respuesta':'se han encontrado documentos',
                'st7':documentos_obtenidos,
                'ok':true,
                }
            }
    }else{
        return{
            'res':{
                'respuesta':'no han encontrado documentos',
                'coincidencias':0,
                'st7':null,
                'ok':false,
            }
        }
    }

};

module.exports = obtener_registros;