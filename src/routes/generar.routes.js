const express = require('express');
const router = express.Router();


router.get('/relacion_certificacion',async(req,res)=>{   /// Actualizar fecha de citas pasadas...

    const obtener_relacion = require('../actions/obtener_relacion_cert');
    const obtenido = await obtener_relacion();
    res.json(obtenido);
    
});


module.exports = router;
