var ST8 = require('../clases/class_st8');

var st8 = ST8();

var crear_st8 = function(d_documento, d_antecedente,d_paciente) {
    st8.setId(d_documento.id);
    st8.setTipo(d_documento.tipo);
    st8.setPaciente(d_paciente);
    st8.setTipo_antecedente(d_documento.tipo_antecedente);
    st8.setFecha_antecedente(d_documento.fecha_antecedente);
    st8.setAntecedente(d_antecedente);
    st8.setFecha_recaida(d_documento.fecha_recaida);
    st8.setSe_acepta_recaida(d_documento.se_acepta_recaida);
    st8.setMedico(d_documento.setMedico);
    st8.setAuo(d_documento.auo);
    st8.setCopia_entregada(d_documento.copia_entregada);
    st8.setFecha_copia_entregada(d_documento.fecha_copia_entregada);
    st8.setArchivo(d_documento.archivo);

    return st8;
};

module.exports = crear_st8;