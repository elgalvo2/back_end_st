const mongoose = require('mongoose');
const { Schema } = mongoose;

const carpetas_schema = new Schema({
  Tipo: {type:String, required: true},
  Titulo: { type: String, required: true },
  Cantidad: { type: Number, required: true, default: 0 },
  Llena: {type: Boolean, required: true, default: false},
});

module.exports = mongoose.model('carpetas', carpetas_schema);
