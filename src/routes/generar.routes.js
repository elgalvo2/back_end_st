const express = require('express');
const router = express.Router();

// 3000/api/generar

router.get('/relacion_certificacion',async(req,res)=>{   /// Actualizar fecha de citas pasadas...

    const obtener_relacion = require('../actions/obtener_relacion_cert');
    const obtenido = await obtener_relacion();
    res.json(obtenido);
    
});

router.post('/relacion_certificacion',async(req,res)=>{

    const enviar_relacion = require('../actions/enviar_relacion_cert');
    const obtenido = await enviar_relacion(req.body.tipo, req.body.id);
    console.log('Esto es la respueta al post de enviar a certificar: ',obtenido);
    res.json(obtenido);

});

router.get('/solicitud_ocis',async(req,res)=>{

    const obtener_relacion = require('../actions/relacion_sol_oci');
    const a_solicitar = await relacion();
    res.json(a_solicitar);

});

router.get('/regreso_ocis',async(req,res)=>{

    const ocis_regreso = require('../actions/ocis_p_regreso');
    const ocis_obtenidas = ocis_regreso();
    res.json(ocis_obtenidas);

});


module.exports = router;
