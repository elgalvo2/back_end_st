const models = require('./obtener_modelo');
const mongoose = require('mongoose')

const consulta_actualiza = async function(id,params){

    var existe_oci = false;
    var oci_en_solicitud = false;
    var oci_para_devolucion = false;
     // SI ST7 ES ACEPTADO
    if(params.aceptado){

        // BUSCA SI EXISTE OCI ARCHIVO:'EN EXISTENCIA'
        const modelo_oci = models['oci'];
        const oci_obtenida = await modelo_oci.findOne({'Serie':params.serie,'No_seguro':params.no_seguro});
        console.log('acutaliza st7 params',params)
        console.log('oci obtenida en consulta', oci_obtenida)
        //SI EXISTE OCI
        if(oci_obtenida != null && oci_obtenida.Archivo==='oci en existencia'){
        existe_oci = true;
        }else{// SI NO EXISTE OCI, SE CREA UNA PARA SOLICITAR 
            const oci_para_solicitud = await modelo_oci.save({
                'Serie':params.serie,
                'Tipo':'oci',
                'Fecha_incapacidad':'',
                'Nombre_paciente':'', 
                'No_seguro':params.no_seguro,
                'Archivo':'en solicitud de oci'
            });  
          
        };

        if(existe_oci){
            const modelo = models[params.tipo];
            const obtenido = await modelo.findOneAndUpdate({"_id":id},{"$set":{
            "Accidente_trayecto":params.accidente_trayecto,
            "Firma_trabajador":params.firma_trabajador,
            "Copia_entregada":params.copia_entregada,
            "Fecha_copia_entregada":params.fecha_copia_entregada,
            "Aceptado":params.aceptado,
            "St1":params.st1,
            "St2":params.st2,
            "Archivo":'listo para relacionar con oci'
            }},{new:true});
            if(obtenido != null){
                return {
                    "respuesta":{
                       "st7":obtenido,
                        "oci":'oci en existencia', 
                        "ok":true,
                        "actions":"Relacione st7 y oci para continuar con el envio a certificar",
                        }
                    }
            }else{
                return {
                    "respuesta":{
                        "st7":null,
                        "oci":'oci en existencia',
                        "ok":false,
                        "actions":"Error con st7...  No se guardo ningun documento",
                        }
                    }
            };
         
        }else{
            const modelo = models[params.tipo];
            const obtenido = await modelo.findOneAndUpdate({"_id":id},{"$set":{
            "Accidente_trayecto":params.accidente_trayecto,
            "Firma_trabajador":params.firma_trabajador,
            "Copia_entregada":params.copia_entregada,
            "Fecha_copia_entregada":params.fecha_copia_entregada,
            "Aceptado":params.aceptado,
            "St1":params.st1,
            "St2":params.st2,
            "Archivo":'listo para relacionar con oci'
            }},{new:true});
            if(obtenido != null){
                return {
                    "respuesta":{
                    "st7":obtenido,
                    "oci":'oci en solicitud', 
                    "ok":true,
                    "actions":"realizar solicitud de oci",
                    }
                }
            }else{
                return {
                    "respuesta":{
                        "st7":null,
                        "oci":'oci en solicitud',
                        "ok":false,
                        "actions":"Error con st7...  No se guardo ningun documento",
                    }
                }
            }
        };
    
    }else{
        const modelo_oci = models['oci'];
        const oci_obtenida = await modelo_oci.findOne({'Serie':params.serie,'No_seguro':params.no_seguro});
        if(oci_obtenida != null && oci_obtenida.Archivo==='oci en existencia'){
            const oci_para_regreso = await modelo_oci.findOneAndUpdate({'Serie':params.serie,'No_seguro':params.no_seguro},{'$set':{'Archivo':"Oci para devolucion a prestaciones"}},{new:true});
        }else{
        const oci_para_regreso = await modelo_oci.create({
            'Serie':params.serie,
            'Tipo':'oci',
            'Fecha_incapacidad':'',
            'Nombre_paciente':'', 
            'No_seguro':params.no_seguro,
            'Archivo':"Oci para devolucion a prestaciones",
            });  
        };

        if(oci_para_regreso!=null){
            const modelo = models[params.tipo];
            const obtenido = await modelo.findOneAndUpdate({"_id":id},{"$set":{
            "Accidente_trayecto":params.accidente_trayecto,
            "Firma_trabajador":params.firma_trabajador,
            "Copia_entregada":params.copia_entregada,
            "Fecha_copia_entregada":params.fecha_copia_entregada,
            "Aceptado":params.aceptado,
            "St1":params.st1,
            "St2":params.st2,
            "Archivo":'negado'
            }},{new:true});
            if(obtenido != null){
                return {
                    "respuesta":{
                       "st7":obtenido,
                        "oci":'oci para devolucion', 
                        "ok":true,
                        "actions":"Archive st7 en negados y comience proceso de devolución de oci",
                        }
                    }
            }else{
                return {
                    "respuesta":{
                        "st7":null,
                        "oci":'oci para devolucion',
                        "ok":false,
                        "actions":"Error con st7...  No se guardo ningun documento",
                    }
                }
            }   
        }
    }
};
    

module.exports = consulta_actualiza;