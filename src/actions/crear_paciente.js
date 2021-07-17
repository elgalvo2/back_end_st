var Paciente = require('../clases/class_paciente');

var paciente = Paciente();
var crear_paciente = function(d_documento) {

    paciente.setNo_seguro(d_documento.no_seguro);
    paciente.setNombre(d_documento.nombre);
    paciente.setApellido(d_documento.apellido);
    paciente.setTelefono(d_documento.telefono);

    return paciente;
}

module.exports = crear_paciente;