const express = require('express');
const router = express.Router();


// middleware



// Task Model

// GET all Tasks
router.get('/', async (req, res) => {  // obtener todas las citas es para pruebas
    //const obtener_todo = require('../consultas_db/obtener_todo');
    //const todo = await obtener_todo('cita');
    const obtener_citas_actuales = require('../consultas_db/obtener_citas_actuales');
    const citas_obtenidas = await obtener_citas_actuales();
    console.log(citas_obtenidas)
    res.json(citas_obtenidas);
});

router.post('/obtener/:id',async(req,res)=>{         // buscar id de cita para actualizar datos del documento guardado en cita
    const buscar_id = require('../consultas_db/buscar_id');
    const obtener_por_id = await buscar_id(req.body.tipo,req.params.id);

    res.json(obtener_por_id);

});

router.get('/eliminar/:id', async(req,res)=>{
    const eliminar = require('../consultas_db/eliminar_cita');
    const eliminado = await eliminar(req.params.id);
    console.log(eliminado);
    res.json(eliminado);
})




router.get('/obtener/:id',async(req,res)=>{         // buscar id de cita para actualizar datos del documento guardado en cita
    const buscar_id = require('../consultas_db/buscar_id');
    const obtener_por_id = await buscar_id(req.body.tipo,req.params.id);
    res.json(obtener_por_id);

});


router.post('/',async(req,res)=>{   /// ingresar la cita nuev
    console.log('reques', req.body);
    const crear_cita = require('../actions/crear_cita');
    const par = req.body;
    const respuesta = await crear_cita(par);
    console.log(1,respuesta);
    res.json(respuesta);
});

router.put('/:id',async(req,res)=>{   /// ingresar la cita nuev
  const modificar_fecha = require('../consultas_db/modificar_fecha');
  const obtenido = await modificar_fecha('cita',req.params.id,req.body);
  res.json("se ha actalizado la fecha de la cita");
    
});




module.exports = router;
