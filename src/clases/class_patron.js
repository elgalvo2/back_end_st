var Patron = function() {
    var sThis = this;
    this.datosPatron = {
        Razon_social: "",
        Registro_patronal: "",
        Direccion: ""
    };

    getRazon_social = function() {
        return sThis.datosPatron.Razon_social;
    };
    setRazon_social = function(RZ) {
        sThis.datosPatron.Razon_social = RZ;
    };
    getRegistro = function() {
        return sThis.datosPatron.RegistroPatronal;
    };
    setRegistro = function(registro) {
        sThis.datosPatron.Registro_patronal = registro;
    };
    getDireccion = function() {
        return sThis.datosPatron.Direccion;
    };
    setDireccion = function(dir) {
        sThis.datosPatron.Direccion = dir;
    };
    muestra_todo = function() {
        return {
            Razon_social: sThis.datosPatron.Razon_social,
            Registro_patronal: sThis.datosPatron.Registro_patronal,
            Direccion: sThis.datosPatron.Direccion
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