var Patron = function() {
    var sThis = this;
    this.datosPatron = {
        razon_social: "",
        registro_patronal: "",
        direccion: ""
    };

    getRazon_social = function() {
        return sThis.datosPatron.razon_social;
    };
    setRazon_social = function(RZ) {
        sThis.datosPatron.razon_social = RZ;
    };
    getRegistro = function() {
        return sThis.datosPatron.registroPatronal;
    };
    setRegistro = function(registro) {
        sThis.datosPatron.registro_patronal = registro;
    };
    getDireccion = function() {
        return sThis.datosPatron.direccion;
    };
    setDireccion = function(dir) {
        sThis.datosPatron.direccion = dir;
    };
    muestra_todo = function() {
        return {
            razon_social: sThis.datosPatron.razon_social,
            registro_patronal: sThis.datosPatron.registro_patronal,
            direccion: sThis.datosPatron.direccion
        };
    };
    return {
        getRazon_social: getRazon_social,
        setRazon_social: setRazon_social,
        getRegistro: getRegistro,
        setRegistro: setRegistro,
        getDireccion: getDireccion,
        setDireccion: setDireccion,
        muestra_todo: muestra_todo
    }
};

module.exports = Patron;