const express = require('express');
const router = express.Router();

// Task Model

// GET all Tasks
router.get('/', async (req, res) => {
    const obtener_todo = require('../consultas_db/obtener_todo');
    const todo = obtener_todo('cita');
    res.send(todo);
});

router.put('/',async(req,res)=>{
    const crear_cita = require('../actions/crear_cita');
    const par = JSON.parse(req.body.document); 
    console.log(par);
    //crear_cita(req.body.cita,req.body.document,req.body.paciente);
    res.send("recibido");
})


/*

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

// UPDATE a new task
router.put('/:id', async (req, res) => {
  const { title, description } = req.body;
  const newTask = {title, description};
  await Task.findByIdAndUpdate(req.params.id, newTask);
  res.json({status: 'Task Updated'});
});

router.delete('/:id', async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({status: 'Task Deleted'});
});
*/
module.exports = router;
