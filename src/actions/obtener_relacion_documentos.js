const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose');

const obtener_relacion_documentos = async function(){
    var model = models['st7'];
    const docst7 = await model.find({"Archivo":"listo para relacionar con oci"});
    model = models['st9'];
    const docst9 = await model.find({"Archivo":"listo para relacionar con oci"});
    const todo = docst7.concat(docst9);
    model = models['st8_st7'];
    const docs = await model.find({"Archivo":"listo para relacionar con oci"});
    const todo2 = todo.concat(docs);
    model = models['st8_st9'];
    const docs2 = await model.find({"Archivo":"listo para relacionar con oci"});
    const todo3 = todo2.concat(docs2);

    console.log('todo3',todo3)
    if(todo3!= null){
        return {
            'res':{
                'respuesta':'se encontraron estos documentos',
                'documentos':todo3,
                'ok':true,
            }
        };
    }else{
        return {
            'res':{
                'respuesta':'algo fallo con la consulta',
                'documentos':todo3,
                'ok':false,
            }
        };
    }
    
};

module.exports = obtener_relacion_documentos;