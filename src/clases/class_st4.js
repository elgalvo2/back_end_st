var ST_4 = function() {
    var sThis = this;
    this.datosST_4 = {
        id: "",
        tipo: "st4",
        folio: "",
        paciente: {},
        fecha_inicio: "",
        fecha_realizacion: "",
        medico: "",
        auo: "",
        firma_trabajador: "", //si / no        
        copia_entregada: "", // si / no 
        fecha_copia_entregada: "",
        
        archivo: ""
    };
    setId = function(ID) {
        sThis.datosST_4.id = ID;
    }
    getId = function() {
        return sThis.datosST_4.id;
    }
    getArchivo = function() {
        return sThis.datosST_4.archivo;
    };
    setArchivo = function(archi) {
        sThis.datosST_4.archivo = archi;
    };
    getTipo = function() {
        return sThis.datosST_4.tipo;
    };
    getFolio = function() {
        return sThis.datosST_4.folio;
    };
    setFolio = function(fol) {
        sThis.datosST_4.folio = fol;
    };
    getPaciente = function() {
        return sThis.datosST_4.paciente;
    };
    setPaciente = function(paciente) {
        sThis.datosST_4.paciente = paciente;
    };
    getRevaloracion = function() {
        return sThis.datosST_4.revaloracion;
    };
    setRevaloracion = function(rev) {
        sThis.datosST_4.revaloracion = rev;
    };
    getSt4_previa = function() {
        return sThis.datosST_4.st4_previa;
    };
    setSt4_previa = function(pre) {
        sThis.datosST_4.st4_previa = pre;
    };
    getFecha_realizacion = function() {
        return sThis.datosST_4.fecha_realizacion;
    };
    setFecha_realizacion = function(fecha) {
        sThis.datosST_4.fecha_realizacion = fecha;
    };
    getMedico = function() {
        return sThis.datosST_4.medico;
    };
    setMedico = function(med) {
        sThis.datosST_4.medico = med;
    };
    getAuo = function() {
        return sThis.datosST_4.auo;
    };
    setAuo = function(auo) {
        sThis.datosST_4.auo = auo;
    };
    getFecha_copia_entregada = function() {
        return sThis.datosST_4.fecha_copia_entregada;
    };
    setFecha_copia_entregada = function(f_copi, firma_trabajador, copia_entrega) {
        sThis.datosST_4.fecha_copia_entregada = f_copi;
        sThis.datosST_4.firma_trabajador = firma_trabajador;
        sThis.datosST_4.copia_entregada = copia_entrega;
    };
    getFecha_inicio = function() { // propiedad para marcadores de calidad-- fecha de inicio del tramite
        return sThis.datosST_4.fecha_inicio;
    };
    setFecha_inicio = function(fecha_ini) {
        sThis.datosST_4.fecha_inicio = fecha_ini;
    };
    muestra_todo = function() {
        return {
            id: sThis.datosST_4.id,
            Tipo: sThis.datosST_4.tipo,
            Folio: sThis.datosST_4.folio,
            Paciente: sThis.datosST_4.paciente,
            Fecha_inicio: sThis.datosST_4.fecha_inicio,
            Fecha_realizacion: sThis.datosST_4.fecha_realizacion,
            Medico: sThis.datosST_4.medico,
            Auo: sThis.datosST_4.auo,
            Firma_trabajador: sThis.datosST_4.firma_trabajador, //si / no        
            Copia_entregada: sThis.datosST_4.copia_entregada,
            Fecha_copia_entregada: sThis.datosST_4.fecha_copia_entregada,
            Archivo: sThis.datosST_4.archivo
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
        getRevaloracion: getRevaloracion,
        setRevaloracion: setRevaloracion,
        getSt4_previa: getSt4_previa,
        setSt4_previa: setSt4_previa,
        getFecha_realizacion: getFecha_realizacion,
        setFecha_realizacion: setFecha_realizacion,
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
module.exports = ST_4;