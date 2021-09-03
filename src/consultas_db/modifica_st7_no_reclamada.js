const models = require('./obtener_modelo');
const mongoose = require('mongoose')


// clase: base de datos a consultar
// param: parametro buscador de busqueda ejemplo -> {"Auo":"luis Galvez"} 
// datos: datos que actualizaran el campo ejemplo -> {"Cita": "datos de cita"}


const obtener_registros = async(id, d_paciente, d_patron, d_oci) => {
    const modelo = models['st7'];

    const documentos_obtenidos = await modelo.findOneAndUpdate({'_id':id},{
        //Datos del paciente
        "Paciente.No_seguro":d_paciente.no_seguro,
        "Paciente.Nombre":d_paciente.nombre,
        "Paciente.Apellido":d_paciente.apellido,
        "Paciente.Telefono":d_paciente.telefono,
        //DAtos del patron
        "Patron.Razon_social":d_patron.razon_social,
        "Patron.Registro_patronal":d_patron.registro_patronal,
        "Patron.Direccion": d_patron.direccion,
        //Datos de OCi
        "Oci.Serie":d_oci.serie,
        "Oci.Tipo":'oci',
        "Oci.No_seguro":d_oci.no_seguro,
        //datos del documento
        "Auo":'Luis Angel Galvez',
        "Medico":'Rodolfo Ahumada Osuna',
        "Archivo":'citados'
    },{new:true}); // consulta y guarda todos los documentos encontrados con el parametro args
    
    if(documentos_obtenidos!=null){
        return{
            'res':{
                'respuesta':'se ha modificado el documento encontrado',
                'st7':documentos_obtenidos,
                'ok':true,
                }
            }
    }else{
        return{
            'res':{
                'respuesta':'no se modifico ningun document0',
                'st7':null,
                'ok':false,
            }
        }
    }

};

module.exports = obtener_registros;