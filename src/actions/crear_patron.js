const Patron = require('../clases/class_patron');

var patron = Patron();
var crear_patron = function(d_patron) {
   
    patron.setRazon_social(d_patron.razon_social);
    patron.setRegistro(d_patron.registro_patronal);
    patron.setDireccion(d_patron.direccion);

    return patron;

}

module.exports = crear_patron;