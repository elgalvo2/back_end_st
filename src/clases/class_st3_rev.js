var ST_3_rev = function() {
    var sThis = this;
    this.datosST_3 = {
        id: "",
        tipo: "st3_rev",
        folio: "",
        paciente: {},
        st3_previa: {},
        fecha_realizacion: "", // es la fecha cuando el dr valora al paciente el dia de la cita
        medico: "",
        auo: "",
        firma_trabajador: "", //si / no        
        copia_entregada: "", // si / no 
        fecha_copia_entregada: "",
        fecha_inicio: "",
        archivo: ""
    };
    getId = function() {
        return sThis.datosST_3.id;
    }
    setId = function(ID) {
        sThis.datosST_3.id = ID;
    }
    getArchivo = function() {
        return sThis.datosST_3.archivo;
    };
    setArchivo = function(archi) {
        sThis.datosST_3.archivo = archi;
    };

    getTipo = function() {
        return sThis.datosST_3.tipo;
    };
    getFolio = function() {
        return sThis.datosST_3.folio;
    };
    setFolio = function(fol) {
        sThis.datosST_3.folio = fol;
    };
    getPaciente = function() {
        return sThis.datosST_3.paciente;
    };
    setPaciente = function(paciente) {
        sThis.datosST_3.paciente = paciente;
    };
    getSt3_previa = function() {
        return sThis.datosST_3.st3_previa;
    };
    setSt3_previa = function(antecedente) {
        sThis.datosST_3.st3_previa = antecedente;
    };
    getFecha_realizacion = function() {
        return sThis.datosST_3.fecha_realizacion;
    };
    setFecha_realizacion = function(fecha) {
        sThis.datosST_3.fecha_realizacion = fecha;
    };
    getMedico = function() {
        return sThis.datosST_3.medico;
    };
    setMedico = function(med) {
        sThis.datosST_3.medico = med;
    };
    getAuo = function() {
        return sThis.datosST_3.auo;
    };
    setAuo = function(auo) {
        sThis.datosST_3.auo = auo;
    };
    getFecha_copia_entregada = function() {
        return sThis.datosST_3.fecha_copia_entregada;
    };
    setFecha_copia_entregada = function(f_copi, firma_trabajador, copia_entrega) {
        sThis.datosST_3.fecha_copia_entregada = f_copi;
        sThis.datosST_3.firma_trabajador = firma_trabajador;
        sThis.datosST_3.copia_entregada = copia_entrega;
    };
    getFecha_inicio = function() { // fecha inicio del trámite-- propiedad para marcadores de calidad
        return sThis.datosST_3.fecha_inicio;
    };
    setFecha_inicio = function(fecha_ini) {
        sThis.datosST_3.fecha_inicio = fecha_ini;
    };
    muestra_todo = function() {
        return {
            id: sThis.datosST_3.id,
            tipo: sThis.datosST_3.tipo,
            folio: sThis.datosST_3.folio,
            paciente: sThis.datosST_3.paciente,
            st3_previa: sThis.datosST_3.st3_previa,
            fecha_realizacion: sThis.datosST_3.fecha_realizacion,
            medico: sThis.datosST_3.medico,
            auo: sThis.datosST_3.auo,
            firma_trabajador: sThis.datosST_3.firma_trabajador, //si / no        
            copia_entregada: sThis.datosST_3.copia_entregada, // si / no 
            fecha_copia_entregada: sThis.datosST_3.fecha_copia_entregada,
            fecha_inicio: sThis.datosST_3.fecha_inicio,
            archivo: sThis.datosST_3.archivo
        };
    };
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
        getSt3_previa: getSt3_previa,
        setSt3_previa: setSt3_previa,
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
module.exports = ST_3_rev;