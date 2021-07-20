const models = require('./obtener_modelo');
const mongoose = require('mongoose')

const ocis_p_regreso = function(){

    var modelo = models['st7'];
    var  st7_negadas = await modelo.find({"Aceptado":"no"},{"Paciente.No_seguro":1,"Oci.Serie":1,"_id":0});

    if(!st7_negadas){
        st7_negadas = [];
    
    modelo = models['st9'];
    var st9_negadas = await modelo.find({"Aceptado":"no"},{"Paciente.No_seguro":1,"Oci.Serie":1,"_id":0});

    if(!st9_negadas){
        st9_negadas = [];


    if(st7_negadas.length == 0 && st9_negadas.length == 0){
        return "No se ha encontrado nada";
    }else{
        const todo = st7_negadas.concat(st9_negadas);
        retunr todo;
    };

};

module.exports = ocis_p_regreso;