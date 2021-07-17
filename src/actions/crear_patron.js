const Patron = require('../clases/class_patron');

var patron = Patron();
var crear_patron = function(d_patron) {
    var p_patron = d_patron || {
        razon_social: "",
        registro_patronal: "",
        direccion: ""
    }
    patron.setRazon_social(p_patron.razon_social);
    patron.setRegistro(p_patron.registro_patronal);
    patron.setDireccion(p_patron.direccion);

    return patron;

}

module.exports = crear_patron;