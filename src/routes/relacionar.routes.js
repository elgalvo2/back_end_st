const express = require('express');
const router = express.Router();


router.get('/',async(req,res)=>{   /// Actualizar fecha de citas pasadas...

    const obtener_relacion_documentos = require('../actions/obtener_relacion_documentos');

    const documentos_obtenidos = await obtener_relacion_documentos();

    //const obtener_relacion_ocis = require('../actions/crear_relacion_ocis');
    //const obtenido = await obtener_relacion_ocis();
    res.json(documentos_obtenidos);
    
});
router.post('/',async(req,res)=>{   /// El front end debe enviar no_serie , nombre del paciente y tipo y _id del documento con el que se relaciona

    const actualizar_documento = require('../consultas_db/guardar_registro');
    const actualizar_oci = require('../actions/actualizar_oci');
    const consulta_id_modifica = require('../consultas_db/consulta_id_y_modifica');

    if(req.body.serie==""){

        const obtener_registro_oci = require('../consultas_db/obtener_registros');  
        const obtenido_oci = await obtener_registro_oci('oci',req.body.no_seguro); //<---- obtenido oci es un array

        
        const oci_actualizada = await actualizar_oci(obtenido_oci[0]);

        const doct_actualizado = await consulta_id_modifica(req.body.tipo,req.body._id,oci_actualizada);
        
        res.json(doct_actualizado);
    }else{

        
        const obtener_registro_oci = require('../consultas_db/obtener_registros');  
        obtenido_oci = await obtener_registro_oci('oci',req.body.no_seguro);

        if(obtenido_oci == null){
            const models = require('../consultas_db/obtener_modelo');
            const modelo = models[req.body.tipo];

            const obtenido_oci_2 = modelo.find({$and:[{"No_seguro":param},{"Archivo":"oci en existencia"}]}); // consulta y guarda todos los documentos encontrados con el parametro args

            const oci_actualizada = await actualizar_oci(obtenido_oci_2[0]);

            const doct_actualizado = await consulta_id_modifica(req.body.tipo,req.body._id,oci_actualizada);

            res.json(doct_actualizado);

        }else{

            const oci_actualizada = await actualizar_oci(obtenido_oci[0]);

            const doct_actualizado = await consulta_id_modifica(req.body.tipo,req.body._id,oci_actualizada);

            res.json(doct_actualizado);

        };
        
    };
    
    
});

module.exports = router;