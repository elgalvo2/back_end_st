const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose')


// clase: base de datos a consultar
// param: parametro buscador de busqueda ejemplo -> {"Auo":"luis Galvez"} 
// datos: datos que actualizaran el campo ejemplo -> {"Cita": "datos de cita"}


const obtener_registros = async(param) => {

    if(param.tipo==='st8'){
        var modelo = models['st8_st7'];

        const documentos_obtenidos = await modelo.find({$and:[{"No_seguro":param.no_seguro},{"Archivo":"enviado a certificar"}]}); // consulta y guarda todos los documentos encontrados con el parametro args
         
        var modelo = models['st8_st9'];

        const documentos_obtenidos2 = await modelo.find({$and:[{"No_seguro":param.no_seguro},{"Archivo":"enviado a certificar"}]}); // consulta y guarda todos los documentos encontrados con el parametro args
    
        const todo = documentos_obtenidos.concat(documentos_obtenidos2);
        if(todo != null && todo.length !=0){
            return {
                res:{
                    'respuesta':'Se encontraron estos documentos',
                    'docs':todo,
                    'ok':true
                }
            }
        }else{
            return{
                res:{
                    'respuesta':'No se encontraron documentos',
                    'ok':false,
                }
            }
        }
    }else{
        const modelo = models[param.tipo];

    const documentos_obtenidos = await modelo.find({$and:[{"No_seguro":param.no_seguro},{"Archivo":"enviado a certificar"}]}); // consulta y guarda todos los documentos encontrados con el parametro args
    if(documentos_obtenidos != null && documentos_obtenidos.length !=0){
        return {
            res:{
                'respuesta':'Se encontraron estos documentos',
                'docs':documentos_obtenidos,
                'ok':true
            }
        }
    }else{
        return{
            res:{
                'respuesta':'No se encontraron documentos',
                'ok':false,
            }
        }
    }

    }
};

module.exports = obtener_registros;