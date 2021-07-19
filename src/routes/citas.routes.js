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
    res.json(citas_obtenidas);
});

router.get('/:id',async(req,res)=>{         // buscar id de cita para actualizar datos del documento guardado en cita
    const buscar_id = require('../consultas_db/buscar_id');
    const obtener_por_id = await buscar_id('cita',req.params.id);
    res.json(obtener_por_id);

});

router.post('/',async(req,res)=>{   /// ingresar la cita nuev
    const crear_cita = require('../actions/crear_cita');
    const par = req.body;
    const respuesta = await crear_cita(par);
    res.json(respuesta);
});

router.put('/:id',async(req,res)=>{   /// ingresar la cita nuev
  const modificar_fecha = require('../consultas_db/modificar_fecha');
  const obtenido = await modificar_fecha('cita',req.params.id,req.body);
  res.json("se ha actalizado la fecha de la cita");
    
});


module.exports = router;
