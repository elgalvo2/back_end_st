var ST_9 = function() { // validaciones de fechas y datos en HTML
    var sThis = this;
    this.datosST_9 = {
        id: "",
        tipo: "st9",
        paciente: {},
        oci: {},
        fecha_primera_consulta: "",
        folio_incapacidad_inicial: "", //folio de la incapacidad en caso de existir
        fecha_incapacidad_inicial: "", // fecha incapacidad inicial en caso de existir // si / no
        medico: "",
        auo: "",
        copia_entregada: "", // si / no 
        fecha_copia_entregada: "",
        archivo: ""
    };

    setOci = function(OCI) {
        sThis.datosST_9.oci = OCI;
    }
    getOci = function() {
        return sThis.datosST_9.oci;
    }
    setId = function(ID) {
        sThis.datosST_9.id = ID;
    }
    getId = function() {
        return sThis.datosST_9.id;
    }
    getArchivo = function() {
        return sThis.datosST_9.archivo;
    };
    setArchivo = function(archi) {
        sThis.datosST_9.archivo = archi;
    };
    getPaciente = function() {
        return sThis.datosST_9.paciente;
    };
    setPaciente = function(paciente) {
        sThis.datosST_9.paciente = paciente;
    };
    getTipo = function() {
        return sThis.datosST_9.tipo;
    };
    getFecha_primera_consulta = function() {
        return sThis.datosST_9.fecha_primera_consulta;
    };
    setFecha_primera_consulta = function(fecha_consu) {
        sThis.datosST_9.fecha_primera_consulta = fecha_consu;
    };
    getFolio_incapacidad_inicial = function() {
        return sThis.datosST_9.folio_incapacidad_inicial;
    };
    setFolio_incapacidad_inicial = function(inca) {
        sThis.datosST_9.folio_incapacidad_inicial = inca;
    };
    getFecha_incapacidad_inicial = function() {
        return sThis.datosST_9.fecha_incapaidad_inicial;
    };
    setFecha_incapacidad_inicial = function(fechaOci) {
        sThis.datosST_9.fecha_incapaidad_inicial = fechaOci;
    };
    getMedico = function() {
        return sThis.datosST_9.medico;
    };
    setMedico = function(med) {
        sThis.datosST_9.medico = med;
    };
    getAuo = function() {
        return sThis.datosST_9.auo;
    };
    setAuo = function(auo) {
        sThis.datosST_9.auo = auo;
    };
    getCopia_entregada = function() {
        return sThis.datosST_9.copia_entregada;
    };
    setCopia_entregada = function(copi) {
        sThis.datosST_9.copia_entregada = copi;
    };
    getFecha_copia_entregada = function() {
        return sThis.datosST_9.fecha_copia_entregada;
    };
    setFecha_copia_entregada = function(f_copi) {
        sThis.datosST_9.fecha_copia_entregada = f_copi;
    };
    muestra_todo = function() {
        return {
            Tipo: sThis.datosST_9.tipo,
            Paciente: sThis.datosST_9.paciente,
            Oci: sThis.datosST_9.oci,
            Fecha_primera_consulta: sThis.datosST_9.fecha_primera_consulta,
            Folio_incapacidad_inicial: sThis.datosST_9.folio_incapacidad_inicial, //folio de la incapacidad en caso de existir
            Fecha_incapacidad_inicial: sThis.datosST_9.fecha_incapacidad_inicial, // fecha incapacidad inicial en caso de existir // si / no
            Medico: sThis.datosST_9.medico,
            Auo: sThis.datosST_9.auo,
            Copia_entregada: sThis.datosST_9.copia_entregada, // si / no 
            Fecha_copia_entregada: sThis.datosST_9.fecha_copia_entregada,
            Archivo: sThis.datosST_9.archivo
        }
    }
    return {
        getId: getId,
        setId: setId,
        getOci: getOci,
        setOci: setOci,
        muestra_todo: muestra_todo,
        getArchivo: getArchivo,
        setArchivo: setArchivo,
        getPaciente: getPaciente,
        setPaciente: setPaciente,
        getFecha_primera_consulta: getFecha_primera_consulta,
        setFecha_primera_consulta: setFecha_primera_consulta,
        getFolio_incapacidad_inicial: getFolio_incapacidad_inicial,
        setFolio_incapacidad_inicial: setFolio_incapacidad_inicial,
        getFecha_incapacidad_inicial: getFecha_incapacidad_inicial,
        setFecha_incapacidad_inicial: setFecha_incapacidad_inicial,
        getMedico: getMedico,
        setMedico: setMedico,
        getAuo: getAuo,
        setAuo: setAuo,
        getCopia_entregada: getCopia_entregada,
        setCopia_entregada: setCopia_entregada,
        getFecha_copia_entregada: getFecha_copia_entregada,
        setFecha_copia_entregada: setFecha_copia_entregada,
        getTipo: getTipo
    }

};
module.exports = ST_9;