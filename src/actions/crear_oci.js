var OCI = require('../clases/class_oci');

var oci = OCI();
var crear_oci = function(param) {
    oci.setSerie(param.serie),
    oci.setFecha_incapacidad(param.fecha_incapacidad);
    oci.setNombre_paciente(param.nombre_paciente);
    oci.setNo_seguro(param.no_seguro);
    return oci;
};

module.exports = crear_oci;