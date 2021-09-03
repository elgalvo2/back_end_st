var ST6 = require('../clases/class_st6');

var st6 = ST6();
var crear_st6 = function(d_st6, d_paciente, d_patron) {

    st6.setId(d_st6.id);
    st6.setFolio(d_st6.folio);
    st6.setPaciente(d_paciente);
    st6.setPatron(d_patron);
    st6.setParentesco_beneficiario(d_st6.parentesco_beneficiario);
    st6.setMedico(d_st6.medico);
    st6.setAuo(d_st6.auo);
    st6.setFecha_copia_entregada(d_st6.fecha_copia_entregada, d_st6.firma_trabajador, d_st6.copia_entregada);
    st6.setFecha_inicio(d_st6.fecha_inicio);
    st6.setArchivo(d_st6.archivo);

    return st6;
};

module.exports = crear_st6;