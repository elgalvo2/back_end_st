const {model, Schema} = require('mongoose')


var Material_schema = new Schema({
    Id: {type:String, required:true},
    Nombre: {type:String, required:true},
    Tipo: {type:String, required:true, default:'Refaccion'},
    Uso: {type:String, required: true, default:"General"},
    Stack: {type:Number, required:true, default:0}

})

var Materiales_schema = new Schema({
    Material:[Material_schema],
    Cantidad: {type:Number, required:true, default:0}, 
})

var Tecnico_schema = new Schema({
    Nombre:{type:String, required:true},
    Turno: {type:String, required: true, default:'TM'},
    Area:{type:String, required:true, default:'General'},
    Especialidad: {type:String, required: true, default:'General'},
    Matricula:{type:String, required:true, default:"not defined"}, 
})

var Orden_schema = new Schema({
    Folio:{type:String, required:true},
    Fecha:{type:String, required: true, default:'dd-mm-aa'},
    Descripcion: {type:String, required:true},
    Area:{type:String, required: true, default:'No definida'},
    Tecnico:[Tecnico_schema],
    Materiales:{type:Array},
    Realizado: {type:Boolean, required:true, default:false},
    Fecha_realizacion:{type:String}
})


const models = {
    material_model : model('material_schema',Material_schema),
    tecnico_model : model('tecnico_schema',Tecnico_schema),
    orden_model: model('orden_schema',Orden_schema),
}

module.exports = models;