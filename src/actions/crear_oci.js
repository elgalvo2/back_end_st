var OCI = require('../clases/class_oci');

var oci = OCI();
var crear_oci = function() {
    
    return oci;
};

module.exports = crear_oci;