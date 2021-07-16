const express = require('express');
const router = express.Router();

// Task Model

// GET all Tasks
router.get('/', async (req, res) => {
    const obtener_todo = require('../consultas_db/obtener_todo');
    const todo = await obtener_todo('cita');
    res.json(todo);
});

router.get('/:id',async(req,res)=>{         // buscar id de cita para actualizar datos del documento guardado en cita
    const buscar_id = require('../consultas_db/buscar_id');
    const obtener_por_id = await buscar_id('cita',req.params.id);
    res.json(obtener_por_id);

});

router.put('/',async(req,res)=>{
    const crear_cita = require('../actions/crear_cita');
    const par = req.body;
    const respuesta = crear_cita(par);
    res.json("respuesta")
});

router.put('/:id',async(req,res)=>{
    const actualizar_documento = require('../actions/actualizar_documento');
    const actualizar_antecedente = require('../actions/actualizar_antecedente');
    if(req.params.tipo == 'st3'){
      const antecedente = actualizar_antecedente('st7',req.params)
    }
    const actualizado = await actualizar_documento('cita',req.params);

    res.json(actualizado);
})




/*

// UPDATE a new task
router.put('/:id', async (req, res) => {
  const { title, description } = req.body;
  const newTask = {title, description};
  await Task.findByIdAndUpdate(req.params.id, newTask);
  res.json({status: 'Task Updated'});
});


// GET all Tasks
router.put('/:d_cita/:d_documento', async (req, res) => {       
  const action = crear_cita(req.params.d_cita,req.params.d_documento,req.params.d_paciente);
  if(action == 1){
    res.json('Cita guardada');
  }else{
    res.json('Cita no guardada');
  }
  
});

// ADD a new task
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const task = new Task({title, description});
  await task.save();
  res.json({status: 'Task Saved'});
});


router.delete('/:id', async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({status: 'Task Deleted'});
});
*/
module.exports = router;
