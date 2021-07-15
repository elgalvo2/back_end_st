var Paciente = require('../clases/class_paciente');

var paciente = Paciente();
var crear_paciente = function(d_paciente) {
    paciente.setNo_seguro(d_paciente.no_seguro);
    paciente.setNombre(d_paciente.nombre);
    paciente.setApellido(d_paciente.apellido);
    paciente.setTelefono(d_paciente.telefono);

    return paciente;
}

module.exports = crear_paciente;