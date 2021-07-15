var ST3 = require('../clases/class_st3');

var st3 = ST3();
var crear_st3 = function(d_st3, d_antecedente, d_paciente) {

    st3.setId(d_st3.id);
    st3.setFolio(d_st3.folio);
    st3.setPaciente(d_paciente);
    st3.setAntecedente(d_antecedente);
    st3.setFecha_antecedente(d_st3.fecha_antecedente);
    st3.setFecha_realizacion(d_st3.fecha_realizacion);
    st3.setMedico(d_st3.medico);
    st3.setAuo(d_st3.auo);
    st3.setFecha_copia_entregada(d_st3.fecha_copia_entregada, d_st3.firma_trabajador, d_st3.copia_entregada);
    st3.setFecha_inicio(d_st3.fecha_inicio);
    st3.setArchivo(d_st3.archivo);

    return st3;
};

module.exports = crear_st3;