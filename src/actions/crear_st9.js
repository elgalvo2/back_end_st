const ST9 = require('../clases/class_st9');

var st9 = ST9();
var crear_st9 = function(d_documento, d_paciente, d_oci) {
    st9.setId(d_documento.id);
    st9.setTipo(d_documento.tipo);
    st9.setPaciente(d_paciente);
    st9.setOci(d_oci);
    st9.setFecha_primera_consulta(d_documento.fecha_primera_consulta);
    st9.setFolio_incapacidad_inicial(d_documento.folio_incapacidad_inicial);
    st9.setFecha_incapacidad_inicial(d_documento.fecha_incapacidad_inicial);
    st9.setMedico(d_documento.medico);
    st9.setAuo(d_documento.auo);
    st9.setCopia_entregada(d_documento.setCopia_entregada);
    st9.setFecha_copia_entregada(d_documento.fecha_copia_entregada);
    st9.setArchivo(d_documento.archivo);

    return st9;
};

module.exports = crear_st9;