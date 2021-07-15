var ST7 = require('.../clases/class_st7');

var st7 = ST7();
var crear_st7 = function(d_st7, d_paciente, d_patron, d_oci) {

    st7.setId(d_st7.id);
    st7.setPaciente(d_paciente);
    st7.setPatron(d_patron);
    st7.setOci(d_oci);
    st7.setFecha_accidente(d_st7.fecha_accidente);
    st7.setFolio_incapacidad_inicial(st7.folio_incapacidad_inicial);
    st7.setFecha_incapacidad_inicial(st7.fecha_incapacidad_inicial);
    st7.setAccidente_trayecto(st7.accidente_trayecto);
    st7.setMedico(d_st7.medico);
    st7.setAuo(d_st7.auo);
    st7.setFirma_trabajador(st7.firma_trabajador);
    st7.setCopia_entregada(st7.copia_entregada);
    st7.setFecha_copia_entregada(st7.copia_entregada);
    st7.setSt1(st7.st1);
    st7.setSt2(st7.st2);
    st7.setArchivo(st7.archivo);

    return st7;
};

module.exports = crear_st7;