const express = require('express');
const router = express.Router();


router.put('/oci',async(req,res)=>{   /// Actualizar fecha de citas pasadas...

    const ingresar_oci = require('../actions/ingresar_oci');
    const obtenido = await ingresar_oci(req.body);
    res.json(obtenido);
    
});
router.put('/st7',async(req,res)=>{   /// Actualizar fecha de citas pasadas...

    const ingresar_st7 = require('../actions/ingresar_st7');
    const obtenido = await ingresar_st7(req.body);    
    res.json(obtenido);
    
});
router.put('/dictamenes',async(req,res)=>{

    const ingresa_dictamen = require('../actions/ingresar_dictamen');
    const obtenido = await ingresa_dictamen(req.body);
    res.json(obtenido);

})

module.exports = router;
