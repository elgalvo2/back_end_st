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
})

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
    Fecha_accidente: String,
    Folio_incapacidad_inicial: String, //folio de la incapacidad en caso de existir
    Fecha_incapacidad_inicial: String, // fecha incapacidad inicial en caso de existir
    Accidente_trayecto: String, // si / no
    Medico: String,
    Auo: String,
    Firma_trabajador: String, //si / no        
    Copia_entregada: String, // si / no 
    Fecha_copia_entregada: String,
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
    Firma_trabajdor: Boolean,
    Copia_entregada: Boolean,
    Fecha_copia_entregada: String,
    Fecha_inicio: String,
    Archivo: String
});
var ST3_rev_schema = new Schema({
    Tipo: String,
    Folio: String,
    Paciente: [Paciente_schema],
    Revaloracion: String,
    St3_previa: [ST3_schema],
    Antecedente: String,
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
    Revaloracion: String,
    St4_previa: String,
    Antecedente: [ST7_schema],
    Fecha_realizacion: String,
    Medico: String,
    Auo: String,
    Firma_trabajador: String, //si / no        
    Copia_entregada: String, // si / no 
    Fecha_copia_entregada: String,
    Fecha_inicio: String,
    Archivo: String
});
var ST4_rev_schema = new Schema({
    Tipo: String,
    Folio: String,
    Paciente: [Paciente_schema],
    Revaloracion: String,
    St4_previa: [ST4_schema],
    Antecedente: String,
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
    folio: String,
    Patron: [Patron_schema],
    Paciente: [Paciente_schema],
    Nombre_beneficiario: String,
    Parentesco_beneficiario: String,
    Fecha_solicitud: String,
    Medico: String,
    Auo: String,
    Firma_trabajador: String,
    Copia_entregada: String,
    Fecha_copia_entregada: String,
    Fecha_inicio: String,
    Archivo: String
})

var ST8_schema = new Schema({
    Tipo: String,
    Antecedente: [ST7_schema], // st7 o st9
    Fecha_recaida: String,
    Se_acepta_recaida: String, //se acepta recaida si / no
    Medico: String,
    Auo: String,
    Copia_entregada: String, // si / no 
    Fecha_copia_entregada: String,
    Archivo: String
});

var ST9_schema = new Schema({
    Tipo: String,
    Paciente: [Paciente_schema],
    Fecha_primera_consulta: String,
    Folio_incapacidad_inicial: String,
    Fecha_incapacidad_inicial: String,
    Medico: String,
    Auo: String,
    Copia_entregada: String, // si / no 
    Fecha_copia_entregada: String,
    Archivo: String
});

var Cita_schema = new Schema({
    Auo: String,
    Hora: String,
    Fecha: String,
    Doc_completa: String,
    Nota: String,
    St7: [ST7_schema],
    St3: [ST3_schema],
    St3_rev: [ST3_rev_schema],
    St4: [ST4_schema],
    St4_rev: [ST4_rev_schema],
    St6: [ST6_schema],
    St8: [ST8_schema],
    St9: [ST9_schema],
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
    st8_model: model('st8_schema', ST8_schema),
    st9_model: model('st9_schema', ST9_schema),

    //------- Modelo de citas
    cita_model: model('cita_schema', Cita_schema)


};

module.exports = models;