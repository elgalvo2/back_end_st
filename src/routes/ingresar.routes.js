const express = require('express');
const router = express.Router();

router.put('/dictamenes',async(req,res)=>{

    const ingresa_dictamen = require('../actions/ingresar_dictamen');
    const obtenido = await ingresa_dictamen(req.body);
    res.json(obtenido);

});

router.post("/cert",async(req,res)=>{
    console.log(req.body);
    const obtener_cert = require('../consultas_db/obtener_documentos_cert');
    const obtenido = await obtener_cert(req.body);
    console.log(obtenido);
    res.json(obtenido);
})

router.post('/',async(req,res)=>{
    console.log(req.body);
    if(req.body.oci === true && req.body.st7 === true){
        const ingresar_oci = require('../actions/ingresar_oci');
        const ingresar_st7 = require('../actions/ingresar_st7');
        let st7 ={
            tipo:"st7",
            nombre: req.body.nombre,
            apellido: req.body.apellidos,
            no_seguro: req.body.no_seguro,
            fecha_accidente: req.body.fecha_accidente,
        }
        let oci ={
            tipo:"oci",
            nombre: req.body.nombre,
            apellido: req.body.apellidos,
            no_seguro: req.body.no_seguro,
            serie: req.body.serie,
        }
        const obtenido = await ingresar_oci(oci);
        const obtenido2 = await ingresar_st7(st7);

        const respuesta = [obtenido,obtenido2]
        console.log(respuesta);

        res.json(respuesta);
        
    }else if(req.body.oci){
        const ingresar_oci = require('../actions/ingresar_oci');
        
        let oci ={
            tipo:"oci",
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            no_seguro: req.body.no_seguro,
            serie: req.body.serie,
        }
        const obtenido = await ingresar_oci(oci);
        console.log(obtenido);

        res.json(obtenido);
    }
    else if(req.body.st7){
        const ingresar_st7 = require('../actions/ingresar_st7')
        let st7 ={
            tipo:"st7",
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            no_seguro: req.body.no_seguro,
            fecha_accidente: req.body.fecha_accidente,
        }
        const obtenido2 = await ingresar_st7(st7);

        console.log(obtenido2);

        res.json(obtenido2);
    }
})


module.exports = router;
