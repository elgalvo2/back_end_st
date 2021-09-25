const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose');

const obtener_relacion = async function(){

    const relacion_st7_obtenida = await models['st7'].find({"Aceptado":"true","Archivo":"listo para envio a certificacion"});
    const relacion_st9_obtenida = await models['st9'].find({"Aceptado":"true","Archivo":"listo para envio a certificacion"})
    const relacion_st8_st7_obtenida = await models['st8_st7'].find({"Aceptado":"true","Archivo":"listo para envio a certificacion"});
    const relacion_st8_st9_obtenida = await models['st8_st9'].find({"Aceptado":"true","Archivo":"listo para envio a certificacion"});


    const todo = [...relacion_st7_obtenida, ...relacion_st9_obtenida, ...relacion_st8_st7_obtenida, ...relacion_st8_st9_obtenida];

    console.log('relacion st7 para envio a certificacion',relacion_st7_obtenida);

    console.log('relacion para envio a certificacion',todo);

    if(todo!=null){
        return {
            'res':{
                'respuesta':'se han encontrado documentos',
                'docs':todo,
                'ok':true,
            }
        }
    }else{
        return{
            'res':{
                'respuesta':'no se encontraron documentos o  ha ocurrido un error con la consulta',
                'docs':todo,
                'ok':false,
            }
        }
    }
}

module.exports = obtener_relacion;