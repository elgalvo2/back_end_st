var St3_rev = require('../clases/class_st3_rev');

var st3_rev = St3_rev();
var crear_st3_rev = function(d_st3_rev, d_st3, d_paciente) {
    
    st3_rev.setId(d_st3_rev.id);
    st3_rev.setFolio(d_st3_rev.folio);
    st3_rev.setPaciente(d_paciente);
    st3_rev.setSt3_previa(d_st3);
    st3_rev.setFecha_realizacion(d_st3_rev.fecha_realizacion);
    st3_rev.setMedico(d_st3_rev.medico);
    st3_rev.setAuo(d_st3_rev.auo);
    st3_rev.setFecha_copia_entregada(d_st3_rev.fecha_copia_entregada, d_st3_rev.firma_trabajador, d_st3_rev.copia_entregada);
    st3_rev.setFecha_inicio(d_st3_rev.fecha_inicio);
    st3_rev.setArchivo(d_st3_rev.archivo);

    return st3_rev;
};

module.exports = crear_st3_rev;