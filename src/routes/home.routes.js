const express = require('express');
const router = express.Router();

router.get('/citas',async (req,res)=>{
    const obtener_citas_actuales = require('../consultas_db/obtener_citas_actuales');
    const citas_obtenidas = await obtener_citas_actuales();
    res.json(citas_obtenidas);
});
router.put('/citas:id',async (req,res)=>{ //<---- id cita
    
    const actualizar_documento_cita = require('../consultas_db/buscar_id');
})
router.get('/citas_perdidas',async(req,res)=>{
    const obtener_citas_perdidas = require('../consultas_db/obtener_citas_pasadas');
    const citas_obtenidas = await obtener_citas_perdidas();
    res.json(citas_obtenidas);
});
router.get('/colecciones/:tipo',async (req,res)=>{
    const obtener_registro = require('../consultas_db/obtener_todo');
    const obtenido = await obtener_registro(req.params.tipo);
    res.json(obtenido);
});
router.get('/dictamenes',async (req,res)=>{
    const obtener_dictamenes = require('../actions/obtener_dictamenes');
    const obtenido = await obtener_dictamenes();
    res.json(obtenido);

});


module.exports = router;