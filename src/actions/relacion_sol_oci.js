const models = require('./obtener_modelo');
const mongoose = require('mongoose');

const relacion_sol_oci = funciton(){
    var modelo = models['st7'];
    var st7_sin_oci = await modelo.find({"Oci.Archivo":{$ne:{"oci relacionada"}}});
    if(!st7_sin_oci){
        st7_sin_oci = [];
    };

    modelo = modelo['st9'];
    st9_sin_oci = await modelo.find({"Oci.Archivo":{"$ne":{"oci relacionada"}}});
    if(!st9_sin_oci){
        st9_sin_oci = [];
    };

    if(st7_sin_oci.length == 0 && st9_sin_oci.length==0){
        return "No se encontró nada..";
    }else{
        const total = st7_sin_oci.concat(st9_sin_oci);
    };

};

module.exports = relacion_sol_oci;