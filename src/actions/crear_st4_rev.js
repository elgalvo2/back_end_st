var St4_rev = require('.../clases/class_st4_rev');

var st4_rev = St4_rev();
var crear_st4_rev = function(d_st4_rev, d_st4, d_paciente) {
    st4_rev.setId(d_st4_rev.id);
    st4_rev.setFolio(d_st4_rev.folio);
    st4_rev.setPaciente(d_paciente);
    st4_rev.setSt4_previa(d_st4);
    st4_rev.setFecha_realizacion(d_st4_rev.fecha_realizacion);
    st4_rev.setMedico(d_st4_rev.medico);
    st4_rev.setAuo(d_st4_rev.auo);
    st4_rev.setFecha_copia_entregada(d_st4_rev.fecha_copia_entregada, d_st4_rev.firma_trabajador, d_st4_rev.copia_entregada);
    st4_rev.setFecha_inicio(d_st4_rev.fecha_inicio);
    st4_rev.setArchivo(d_st4_rev.archivo);

    return st4_rev;
};

module.exports = crear_st4_rev;