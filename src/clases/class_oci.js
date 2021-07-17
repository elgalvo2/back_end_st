var OCI = function() {
    var sThis = this;
    this.datosOCI = {
        id: "",
        serie: "",
        tipo: "oci",
        fecha_incapacidad: "",
        nombre_paciente: "",
        no_seguro: "",
        archivo: ""
    };
    setId = function(ID) {
        sThis.datosOCI.id = ID;
    }
    getId = function() {
        return sThis.datosOCI.id;
    }
    setSerie = function(ser) {
        sThis.datosOCI.serie = ser;
    }
    getSerie = function() {
        return sThis.datosOci.serie;
    }
    setTipo = function(tip) {
        sThis.datosOCI.tipo = tipo;
    }
    getTipo = function() {
        return sThis.datosOCI.tipo;
    }
    setFecha_incapacidad = function(fech) {
        sThis.datosOCI.fecha_incapacidad = fech;
    }
    getFecha_incapacidad = function() {
        return sThis.datosOCI.fecha_incapacidad;
    }
    setNombre_paciente = function(nom) {
        sThis.datosOCI.nombre_paciente = nom;
    }
    getNombre_paciente = function() {
        return sThis.datosOCI.nombre_paciente;
    }
    setNo_seguro = function(no_s) {
        sThis.datosOCI.no_seguro = no_s;
    }
    getNo_seguro = function() {
        return sThis.datosOCI.no_seguro;
    }
    setArchivo = function(archi) {
        sThis.datosOCI.archivo = archi;
    }
    getArchivo = function() {
        return sThis.datosOCI.archivo;
    }
    muestra_todo = function() {
        return {
            Id: sThis.datosOCI.id,
            Serie: sThis.datosOCI.serie,
            Tipo: sThis.datosOCI.tipo,
            Fecha_incapacidad: sThis.datosOCI.fecha_incapacidad,
            Nombre_paciente: sThis.datosOCI.nombre_paciente,
            No_seguro: sThis.datosOCI.no_seguro,
            Archivo: sThis.datosOCI.archivo

        };
    }

    return {
        getId: getId,
        setId: setId,
        getSerie: getSerie,
        setSerie: setSerie,
        getTipo: getTipo,
        setTipo: setTipo,
        setFecha_incapacidad: setFecha_incapacidad,
        getFecha_incapacidad: getFecha_incapacidad,
        setNombre_paciente: setNombre_paciente,
        setNo_seguro: setNo_seguro,
        getNo_seguro: getNo_seguro,
        setArchivo: setArchivo,
        getArchivo: getArchivo,
        muestra_todo: muestra_todo
    };


}

module.exports = OCI;