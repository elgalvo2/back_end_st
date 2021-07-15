var ST4 = require('../clases/class_st4');

var st4 = ST4();
var crear_st4 = function(d_st4, d_paciente) {

    st4.setId(d_st4.id);
    st4.setFolio(d_st4.folio);
    st4.setPaciente(d_paciente);
    st4.setFecha_realizacion(d_st4.fecha_realizacion);
    st4.setMedico(d_st4.medico);
    st4.setAuo(d_st4.auo);
    st4.setFecha_copia_entregada(d_st4.fecha_copia_entregada, d_st4.firma_trabajador, d_st4.copia_entregada);
    st4.setFecha_inicio(d_st4.fecha_inicio);
    st4.setArchivo(d_st4.archivo);

    return st4;
};

module.exports = crear_st4;