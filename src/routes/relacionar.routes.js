const express = require('express');
const router = express.Router();

router.post('/relacion_ocis/',async(req,res)=>{

    const obtener_relacion_ocis = require('../actions/obtener_relacion_ocis');
    const actualizar_st7 = require('../actions/actualizar_st7')

    console.log(req.body.ocis);
    
        const ocis_obtenidas = await obtener_relacion_ocis('oci',req.body.ocis);
        if(ocis_obtenidas.res.ok){
            const st7_actualizada = await actualizar_st7('st7',req.body.ids,ocis_obtenidas.res.oci);
            console.log('respuesta',st7_actualizada.res)
            res.json(st7_actualizada.res);
        }else{
            console.log('respuesta',ocis_obtenidas.res)
            res.json(ocis_obtenidas.res)
        }
    
    
})


router.get('/',async(req,res)=>{   /// Obtener la relacion de las st9 y st7 sin oci relacionada

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

        console.log(oci_actualizada);

        const doct_actualizado = await consulta_id_modifica(req.body.tipo,req.body._id,oci_actualizada);
        
        res.json(doct_actualizado);
    }else{


        const obtener_registro_oci = require('../consultas_db/obtener_registros');  
        obtenido_oci = await obtener_registro_oci('oci',req.body.no_seguro);

        if(obtenido_oci == null){
            const models = require('../consultas_db/obtener_modelo');
            const modelo = models[req.body.tipo];

            const obtenido_oci_2 = await modelo.find({$and:[{"No_seguro":param},{"Archivo":"oci en existencia"}]}); // consulta y guarda todos los documentos encontrados con el parametro args

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