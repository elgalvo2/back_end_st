const express = require('express');
const router = express.Router();

router.get('/citas',async (req,res)=>{

    const obtener_citas_actuales = require('../consultas_db/obtener_citas_actuales');
    const citas_obtenidas = await obtener_citas_actuales();
    console.log('citas obtenidas', citas_obtenidas)
    res.json(citas_obtenidas);

});

router.put('/citas/:id',(req,res)=>{

    const buscar = require('../consultas_db/buscar_id');
    const doc_obtenido = buscar(req.body.Tipo,req.params.id);
    res.json(doc_obtenido);

});


router.post('/citas/continuar_tramite/:id',async (req,res)=>{ //<---- id cita actualizar los datos de la cita ej. cuando un cita ya es valorada

    console.log('request body', req.body);
    
    if(req.body.tipo=='st7'){

        

        const actualiza_st7 = require('../consultas_db/actualiza_st7');
        const guardado = await actualiza_st7(req.params.id,req.body);

        if(guardado.res.ok){
            const eliminar = require('../consultas_db/eliminar_cita');
            const eliminado = await eliminar(req.body.id_cita);
            if(eliminado.res.ok){
                res.json(guardado)
            }else{
                res.json(eliminado)
            }
        }else{
            res.json(guardado)
        }
        

    }else if(req.body.tipo == 'st3'){
        try{
            
        const actualiza_st3 = require('../consultas_db/actualiza_st3');
        const eliminar = require('../consultas_db/eliminar_cita');
        const st3_updated = await actualiza_st3(req.params.id,req.body);

        if(st3_updated.res.success){
            const app_deleted = await eliminar(req.body.id_cita);
            if(app_deleted.res.ok){
                res.status(200).json({success:true, message:'doc actualizado y cita eliminada'});
            }else{
                res.status(500).json({success:false, message:'error al eliminar la cita'});
            }
        }else{
            res.status(500).json({success:false, message:'Error al actualizar doumento'});
        }

        }catch(err){
            console.log(err);
        }
        

    }else if(req.body.tipo=='st3_rev'){

        try{
            
            const actualiza_st3_rev = require('../consultas_db/actualiza_st3_rev');
            const eliminar = require('../consultas_db/eliminar_cita');
            const st3_rev_updated = await actualiza_st3_rev(req.params.id,req.body);
    
            if(st3_rev_updated.res.success){
                const app_deleted = await eliminar(req.body.id_cita);
                if(app_deleted.res.ok){
                    res.status(200).json({success:true, message:'doc actualizado y cita eliminada'});
                }else{
                    res.status(500).json({success:false, message:'error al eliminar la cita'});
                }
            }else{
                res.status(500).json({success:false, message:'Error al actualizar doumento'});
            };
    
        }catch(err){
            console.log(err);
        }
            

    }else if(req.body.tipo == 'st4'){

        try{
            
            const actualiza_st4 = require('../consultas_db/actualiza_st4');
            const eliminar = require('../consultas_db/eliminar_cita');
            const st4_updated = await actualiza_st4(req.params.id,req.body);
    
            if(st4_updated.res.success){
                const app_deleted = await eliminar(req.body.id_cita);
                if(app_deleted.res.ok){
                    res.status(200).json({success:true, message:'doc actualizado y cita eliminada'});
                }else{
                    res.status(500).json({success:false, message:'error al eliminar la cita'});
                }
            }else{
                res.status(500).json({success:false, message:'Error al actualizar doumento'});
            };
    
        }catch(err){
            console.log(err);
        }

    }else if(req.body.tipo == 'st4_rev'){

        try{
            
            const actualiza_st4_rev = require('../consultas_db/actualiza_st4_rev');
            const eliminar = require('../consultas_db/eliminar_cita');
            const st4_rev_updated = await actualiza_st4_rev(req.params.id,req.body);
    
            if(st4_rev_updated.res.success){
                const app_deleted = await eliminar(req.body.id_cita);
                if(app_deleted.res.ok){
                    res.status(200).json({success:true, message:'doc actualizado y cita eliminada'});
                }else{
                    res.status(500).json({success:false, message:'error al eliminar la cita'});
                }
            }else{
                res.status(500).json({success:false, message:'Error al actualizar doumento'});
            };
    
        }catch(err){
            console.log(err);
        }

    }else if(req.body.tipo == 'st6'){

        try{
            
            const actualiza_st6 = require('../consultas_db/actualiza_st6');
            const eliminar = require('../consultas_db/eliminar_cita');
            const st6_updated = await actualiza_st6(req.params.id,req.body);
    
            if(st6_updated.res.success){
                const app_deleted = await eliminar(req.body.id_cita);
                if(app_deleted.res.ok){
                    res.status(200).json({success:true, message:'doc actualizado y cita eliminada'});
                }else{
                    res.status(500).json({success:false, message:'error al eliminar la cita'});
                }
            }else{
                res.status(500).json({success:false, message:'Error al actualizar doumento'});
            };
    
        }catch(err){
            console.log(err);
        }

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

router.post('/reagendar_cita/:id',async(req, res)=>{
    const {fecha} = req.body;
    const {id} = req.params;

    const re_agendar = require('../consultas_db/re_agendar');
    const re_agendado = re_agendar(id,fecha);
    if(re_agendado){
        res.status(200);
        res.json({ok:true});
    }else{
        res.status(500);
        res.json({ok:false});
    }
})

router.get('/colecciones/:tipo',async (req,res)=>{
    const obtener_registro = require('../consultas_db/obtener_todo');
    const obtenido = await obtener_registro(req.params.tipo);
    console.log(obtenido);
    res.json(obtenido);
});

router.get('/dictamenes',async (req,res)=>{
    const obtener_dictamenes = require('../actions/obtener_dictamenes');
    const obtenido = await obtener_dictamenes();
    res.json(obtenido);

});

module.exports = router;