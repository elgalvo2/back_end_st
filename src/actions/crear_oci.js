var OCI = require('../clases/class_oci');

var oci = OCI();
var crear_oci = function(param) {
    
    console.log('param',param);
    oci.setSerie(param.serie),
    oci.setFecha_incapacidad(param.fecha_incapacidad);
    oci.setNombre_paciente(param.nombre+' '+param.apellido);
    oci.setNo_seguro(param.no_seguro);
    return oci;
};

module.exports = crear_oci;