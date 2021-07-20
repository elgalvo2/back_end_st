var ST_6 = function() {
    var sThis = this;
    this.datosST_6 = {
        id: "",
        tipo: "st6",
        folio: "",
        paciente: {},
        patron: {},
        nombre_beneficiario: "",
        parentesco_beneficiario: "",
        aceptado: "", // fechale solicitud del dictamen
        medico: "",
        auo: "",
        firma_trabajador: "", //si / no        
        copia_entregada: "", // si / no 
        fecha_copia_entregada: "",
        fecha_inicio: "",
        archivo: ""
    };
    getId = function() {
        return sThis.datosST_6.id;
    }
    setId = function(ID) {
        sThis.datosST_6.id = ID;
    }
    getArchivo = function() {
        return sThis.datosST_6.archivo;
    };
    setArchivo = function(archi) {
        sThis.datosST_6.archivo = archi;
    };
    getTipo = function() {
        return sThis.datosST_6.tipo;
    };
    getFolio = function() {
        return sThis.datosST_6.folio;
    };
    setFolio = function(fol) {
        sThis.datosST_6.folio = fol;
    };
    getPaciente = function() {
        return sThis.datosST_6.paciente;
    };
    setPatron = function(pat) {
        sThis.datosST_6.patron = pat;
    };
    getPatron = function(pat) {
        return sThis.datosST_6.patron;
    };

    setPaciente = function(paciente) {
        sThis.datosST_6.paciente = paciente;
    };
    getNombre_beneficiario = function() {
        return sThis.datosST_6.nombre_beneficiario;
    };
    setNombre_beneficiario = function(nom) {
        sThis.datosST_6.nombre_beneficiario = nom;
    };
    getParentesco_beneficiario = function() {
        return sThis.datosST_6.parentesco_beneficiario;
    };
    setParentesco_beneficiario = function(parentesco) {
        sThis.datosST_6.parentesco_beneficiario = parentesco;
    };
    getAceptado = function() {
        return sThis.datosST_6.aceptado;
    };
    setAceptado = function(acept) {
        sThis.datosST_6.aceptado = acept;
    };
    getMedico = function() {
        return sThis.datosST_6.medico;
    };
    setMedico = function(med) {
        sThis.datosST_6.medico = med;
    };
    getAuo = function() {
        return sThis.datosST_6.auo;
    };
    setAuo = function(auo) {
        sThis.datosST_6.auo = auo;
    };
    getFecha_copia_entregada = function() {
        return sThis.datosST_6.fecha_copia_entregada;
    };
    setFecha_copia_entregada = function(f_copi, firma_trabajador, copia_entrega) {
        sThis.datosST_6.fecha_copia_entregada = f_copi;
        sThis.datosST_6.firma_trabajador = firma_trabajador;
        sThis.datosST_6.copia_entregada = copia_entrega;
    };
    getFecha_inicio = function() { // propiedad para marcadores de calidad-- fecha de inicio del tramite
        return sThis.datosST_6.fecha_inicio;
    };
    setFecha_inicio = function(fecha_ini) {
        sThis.datosST_6.fecha_inicio = fecha_ini;
    };
    muestra_todo = function() {
        return {
            id: sThis.datosST_6.id,
            Tipo: sThis.datosST_6.tipo,
            Folio: sThis.datosST_6.folio,
            Patron: sThis.datosST_6.patron,
            Paciente: sThis.datosST_6.paciente,
            Nombre_beneficiario: sThis.datosST_6.nombre_beneficiario,
            Parentesco_beneficiario: sThis.datosST_6.parentesco_beneficiario,
            Aceptado: sThis.datosST_6.aceptado, // fechale solicitud del dictamen
            Medico: sThis.datosST_6.medico,
            Auo: sThis.datosST_6.auo,
            Firma_trabajador: sThis.datosST_6.firma_trabajador, //si / no        
            Copia_entregada: sThis.datosST_6.copia_entregada, // si / no 
            Fecha_copia_entregada: sThis.datosST_6.fecha_copia_entregada,
            Fecha_inicio: sThis.datosST_6.fecha_inicio,
            Archivo: sThis.datosST_6.archivo
        }
    }
    return {
        muestra_todo: muestra_todo,
        setId: setId,
        getId: getId,
        getArchivo: getArchivo,
        setArchivo: setArchivo,
        getTipo: getTipo,
        getFolio: getFolio,
        setFolio: setFolio,
        getPaciente: getPaciente,
        setPaciente: setPaciente,
        getPatron: getPatron,
        setPatron: setPatron,
        getNombre_beneficiario: getNombre_beneficiario,
        setNombre_beneficiario: setNombre_beneficiario,
        getParentesco_beneficiario: getParentesco_beneficiario,
        setParentesco_beneficiario: setParentesco_beneficiario,
        getAceptado: getAceptado,
        setAceptado: setAceptado,
        getMedico: getMedico,
        setMedico: setMedico,
        getAuo: getAuo,
        setAuo: setAuo,
        getFecha_copia_entregada: getFecha_copia_entregada,
        setFecha_copia_entregada: setFecha_copia_entregada,
        getFecha_inicio: getFecha_inicio,
        setFecha_inicio: setFecha_inicio
    }

};
module.exports = ST_6;