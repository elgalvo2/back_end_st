const models = require('../consultas_db/obtener_modelo');
const mongoose = require('mongoose');

const actualizar_antecedente = async function(clase, param){

    const modelo = models[clase];

    const antecedente_obtenido = await modelo.FindOne({"Paciente.No_seguro":param.no_seguro});

    console.log(antecedente_obtenido);


}