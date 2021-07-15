var OCI = require('.../clases/class_oci');

var oci = OCI();
var crear_oci = function(d_oci) {
    oci.setId(d_oci.id);
    oci.setSerie(d_oci.serie);
    oci.setTipo(d_oci.tipo);
    oci.setFecha_incapacidad(d_oci.fecha_incapacidad);
    oci.setNombre_paciente(d_oci.nombre_paciente);
    oci.setNo_seguro(d_oci.no_seguro);
    oci.setArchivo(d_oci.archivo);

    return oci;
};

module.exports = crear_oci;