const express = require('express');
const router = express.Router();

router.get('/citas',async (req,res)=>{

    const obtener_citas_actuales = require('../consultas_db/obtener_citas_actuales');
    const citas_obtenidas = await obtener_citas_actuales();
    res.json(citas_obtenidas);

});
router.put('/citas/:id',(req,res)=>{

    const buscar = require('../consultas_db/buscar_id');
    const doc_obtenido = buscar(req.body.Tipo,req.params.id);
    res.json(doc_obtenido);

});


router.put('/citas/continuar_tramite/:id',async (req,res)=>{ //<---- id cita actualizar los datos de la cita ej. cuando un cita ya es valorada
    
    if(req.body.Tipo=='st7'){

        const actualiza_st7 = require('../consultas_db/actualiza_st7');
        const guardado = await actualiza_st7(req.params.id,req.body);
        res.json(guardado);

    }else if(req.body.tipo == 'st3'){

        const actualiza_st3 = require('../consultas_db/actualiza_st3');
        const guardado = await actualiza_st3(req.params.id,req.body);
        res.json(guardado);

    }else if(req.body.tipo=='st3_rev'){

        const actualiza_st3_rev = require('../consultas_db/actualiza_st3_rev');
        const guardado = await actualiza_st3_rev(req.params.id,req.body);
        res.json(guardado);

    }else if(req.body.tipo == 'st4'){

        const actualiza_st4 = require('../consultas_db/actualiza_st4');
        const guardado = await actualiza_st4(req.params.id,req.body);
        res.json(guardado);

    }else if(req.body.tipo == 'st4_rev'){

        const actualiza_st4_rev = require('../consultas_db/actualiza_st4_rev');
        const guardado = await actualiza_st4_rev(req.params.id,req.body);
        res.json(guardado);

    }else if(req.body.tipo == 'st6'){

        const actualiza_st6 = require('../consultas_db/actualiza_st6');
        const guardado = await actualiza_st6(req.params.id,req.body);
        res.json(guardado);

    }else if(req.body.tipo == 'st8'){

        const actualiza_st8 = require('../consultas_db/actualiza_st8');
        const guardado = await actualiza_st8(req.params.id,req.body);
        res.json(guardado);

    }else if(req.body.tipo == 'st9'){
        const actualiza_st9 = require('../consultas_db/actualiza_st9');
        const guardado = await actualiza_st9(req.params.id,req.body);
        res.json(guardado);
    }else{
        res.json("Nada ha funcionado");
    }

});

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