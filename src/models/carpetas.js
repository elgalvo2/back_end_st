const {model, Schema} = require('mongoose');



var A_E_I_O_U = new Schema({
    Tipo: {type:String, required: true},
    Titulo: {type:String, required: true},
    Turno: {type: String, required:true, default:"TM"},
    Cantidad_archivados: {type:Number, required:true, default:0},
    Llena: {type:Boolean, required:true, default:false}
});

var B_F = new Schema({
    Tipo: {type:String, required: true},
    Titulo: {type:String, required: true},
    Turno: {type: String, required:true, default:"TM"},
    Cantidad_archivados: {type:Number, required:true, default:0},
    Llena: {type:Boolean, required:true, default:false}
});

var G_K = new Schema({
    Tipo: {type:String, required: true},
    Titulo: {type:String, required: true},
    Turno: {type: String, required:true, default:"TM"},
    Cantidad_archivados: {type:Number, required:true, default:0},
    Llena: {type:Boolean, required:true, default:false}
});

var L_N = new Schema({
    Tipo: {type:String, required: true},
    Titulo: {type:String, required: true},
    Turno: {type: String, required:true, default:"TM"},
    Cantidad_archivados: {type:Number, required:true, default:0},
    Llena: {type:Boolean, required:true, default:false}
});

var Ñ_R = new Schema({
    Tipo: {type:String, required: true},
    Titulo: {type:String, required: true},
    Turno: {type: String, required:true, default:"TM"},
    Cantidad_archivados: {type:Number, required:true, default:0},
    Llena: {type:Boolean, required:true, default:false}
});

var S_V = new Schema({
    Tipo: {type:String, required: true},
    Titulo: {type:String, required: true},
    Turno: {type: String, required:true, default:"TM"},
    Cantidad_archivados: {type:Number, required:true, default:0},
    Llena: {type:Boolean, required:true, default:false}
});

var W_Z = new Schema({
    Tipo: {type:String, required: true},
    Titulo: {type:String, required: true},
    Turno: {type: String, required:true, default:"TM"},
    Cantidad_archivados: {type:Number, required:true, default:0},
    Llena: {type:Boolean, required:true, default:false}
});

const models = {
    a_e_i_o_u: model('A_E_I_O_U',A_E_I_O_U),
    b_f: model("B_F",B_F),
    g_k: model("G_K",G_K),
    l_n: model("L_N",L_N),
    ñ_r: model("Ñ_R",Ñ_R),
    s_v: model("S_V",S_V),
    w_z: model("W_Z",W_Z),
}

module.exports = models;
