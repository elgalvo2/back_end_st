const express = require('express');
const router = express.Router();

router.get('/',async(req,res)=>{
    console.log('req body conservacion materiales',req.body.materiales);
    const get_tasks = require('../actions/get_tasks.js');
    const tasks = await get_tasks();


    res.json(tasks);
})

router.post('/',async(req,res)=>{
    const add_task = require('../actions/add_task');
    console.log('req.body',req.body)
    const work = await add_task(req.body);
    console.log('work', work)
    res.json(work);
})
//router.post()
//router.put()
//router.delete()


module.exports = router;
