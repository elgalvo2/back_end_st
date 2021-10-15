const { model, Schema } = require('mongoose');


var Paciente_schema = new Schema({ // agegado
    No_seguro: Number,
    Nombre: String,
    Apellido: String,
    Telefono: Number
});

var Patron_schema = new Schema({ //
    Razon_social: String,
    Registro_patronal: String,
    Direccion: String
});

var Oci_schema = new Schema({
    Id: String,
    Serie: String,
    Tipo: String,
    Fecha_incapacidad: String,
    Nombre_paciente: String,
    No_seguro: String,
    Archivo: String

});

var ST7_schema = new Schema({
    Tipo: String,
    Paciente: [Paciente_schema],
    Patron: [Patron_schema],
    Oci:[Oci_schema],
    Fecha_accidente: String,
    Folio_incapacidad_inicial: String, //folio de la incapacidad en caso de existir
    Fecha_incapacidad_inicial: String, // fecha incapacidad inicial en caso de existir
    Accidente_trayecto: String, // si / no
    Medico: String,
    Auo: String,
    Firma_trabajador: String, //si / no        
    Copia_entregada: String, // si / no 
    Fecha_copia_entregada: String,
    Aceptado: String,
    St1: String, // si / no ya calificado
    St2: String, //si  / no alta de paciente
    Archivo: String
});

var ST3_schema = new Schema({
    Tipo: String,
    Folio: String,
    Paciente: [Paciente_schema],
    Antecedente: [ST7_schema],
    Fecha_antecedente: String,
    Fecha_realizacion: String,
    Medico: String,
    Auo: String,
    Firma_trabajdor: String,
    Copia_entregada: String,
    Fecha_copia_entregada: String,
    Fecha_inicio: String,
    Archivo: String
});
var ST3_rev_schema = new Schema({
    Tipo: String,
    Folio: String,
    Paciente: [Paciente_schema],
    St3_previa: [ST3_schema],
    Fecha_realizacion: String,
    Medico: String,
    Auo: String,
    Firma_trabajdor: String,
    Copia_entregada: String,
    Fecha_copia_entregada: String,
    Fecha_inicio: String,
    Archivo: String
});
var ST4_schema = new Schema({
    Tipo: String,
    Folio: String,
    Paciente: [Paciente_schema],
    Fecha_inicio: String,
    Fecha_realizacion: String,
    Medico: String,
    Auo: String,
    Firma_trabajador: String, //si / no        
    Copia_entregada: String, // si / no 
    Fecha_copia_entregada: String,
    Archivo: String
});
var ST4_rev_schema = new Schema({
    Tipo: String,
    Folio: String,
    Paciente: [Paciente_schema],
    St4_previa: [ST4_schema],
    Fecha_st4_previa: String,
    Fecha_realizacion: String,
    Medico: String,
    Auo: String,
    Firma_trabajador: String, //si / no        
    Copia_entregada: String, // si / no 
    Fecha_copia_entregada: String,
    Fecha_inicio: String,
    Archivo: String
});

var ST6_schema = new Schema({
    Tipo: String,
    Folio: String,
    Patron: [Patron_schema],
    Paciente: [Paciente_schema],
    Nombre_beneficiario: String,
    Parentesco_beneficiario: String,
    Aceptado: String,
    Medico: String,
    Auo: String,
    Firma_trabajador: String,
    Copia_entregada: String,
    Fecha_copia_entregada: String,
    Fecha_inicio: String,
    Archivo: String
});
var ST9_schema = new Schema({
    Tipo: String,
    Paciente: [Paciente_schema],
    Oci: [Oci_schema],
    Patron:[Patron_schema],
    Fecha_primera_consulta: String,
    Folio_incapacidad_inicial: String,
    Fecha_incapacidad_inicial: String,
    Medico: String,
    Auo: String,
    Aceptado: String,
    Copia_entregada: String, // si / no 
    Fecha_copia_entregada: String,
    Archivo: String
});

var ST8_schema_ast7 = new Schema({
    Tipo: String,
    Patron: [Patron_schema],
    Paciente: [Paciente_schema],
    Oci: [Oci_schema],
    Tipo_antecedente:String,
    Antecedente: [ST7_schema], // st7 o st9
    Fecha_antecedente: String,
    Fecha_recaida: String,
    Se_acepta_recaida: String, //se acepta recaida si / no
    Medico: String,
    Auo: String,
    Copia_entregada: String, // si / no 
    Fecha_copia_entregada: String,
    Archivo: String
});
var ST8_schema_ast9 = new Schema({
    Tipo: String,
    Patron: [Patron_schema],
    Paciente: [Paciente_schema],
    Oci: [Oci_schema],
    Tipo_antecedente:String,
    Antecedente: [ST9_schema], // st7 o st9
    Fecha_antecedente: String,
    Fecha_recaida: String,
    Se_acepta_recaida: String, //se acepta recaida si / no
    Medico: String,
    Auo: String,
    Copia_entregada: String, // si / no 
    Fecha_copia_entregada: String,
    Archivo: String
});

var Cita_schema = new Schema({
    Auo: String,
    Hora: String,
    Fecha: Date,
    Id_documento: String,
    Doc_completa: String,
    Nota: String,
    Tipo:String,
});

const models = {
    // ----- Modelo de sujetos
    paciente_model: model('paciente_schema', Paciente_schema),
    patron_model: model('patron_schema', Patron_schema),

    //----- Modelo de documentos
    oci_model: model('oci_schema', Oci_schema),
    st3_model: model('st3_schema', ST3_schema),
    st3_rev_model: model('st3_rev_schema', ST3_rev_schema),
    st4_model: model('st4_schema', ST4_schema),
    st4_rev_model: model('st4_rev_schema', ST4_rev_schema),
    st6_model: model('st6_schema', ST6_schema),
    st7_model: model('st7_schema', ST7_schema),
    st87_model: model('st87_schema', ST8_schema_ast7),
    st89_model: model('st89_schema', ST8_schema_ast9),
    st9_model: model('st9_schema', ST9_schema),

    //------- Modelo de citas
    cita_model: model('cita_schema', Cita_schema)


};

module.exports = models;