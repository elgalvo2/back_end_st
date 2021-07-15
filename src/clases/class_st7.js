var ST_7 = function() { // validaciones de fechas y datos en HTML
    var sThis = this;
    this.datosST_7 = {
        id: "",
        tipo: "st7",
        patron: {},
        paciente: {},
        oci: {},
        fecha_accidente: "",
        folio_incapacidad_inicial: "", //folio de la incapacidad en caso de existir
        fecha_incapacidad_inicial: "", // fecha incapacidad inicial en caso de existir
        accidente_trayecto: "", // si / no
        medico: "",
        auo: "",
        firma_trabajador: "", //si / no        
        copia_entregada: "", // si / no 
        fecha_copia_entregada: "",
        st1: "", // si / no ya calificado
        st2: "", //si  / no alta de paciente
        archivo: ""
    };
    setId = function(ID) {
        sThis.datosST_7.id = ID;
    }
    getId = function() {
        return sThis.datosST_7.id;
    }
    setOci = function(OCI) {
        sThis.datosST_7.oci = OCI;
    }
    getOci = function() {
        return sThis.datosST_7.oci;
    }
    getArchivo = function() {
        return sThis.datosST_7.archivo;
    };
    setArchivo = function(archi) {
        sThis.datosST_7.archivo = archi;
    };
    getCita = function() {
        return sThis.datosST_7.cita;
    };
    setCita = function(cita) {
        sThis.datosST_7.cita = cita;
    };

    getPaciente = function() {
        return sThis.datosST_7.paciente;
    };
    setPaciente = function(paciente) {
        sThis.datosST_7.paciente = paciente;
    };
    getTipo = function() {
        return sThis.datosST_7.tipo;
    };
    getFecha_accidente = function() {
        return sThis.datosST_7.fecha_accidente;
    };
    setFecha_accidente = function(fecha_acc) {
        sThis.datosST_7.fecha_accidente = fecha_acc;
    };
    getFolio_incapacidad_inicial = function() {
        return sThis.datosST_7.folio_incapacidad_inicial;
    };
    setFolio_incapacidad_inicial = function(inca) {
        sThis.datosST_7.folio_incapacidad_inicial = inca;
    };
    getFecha_incapacidad_inicial = function() {
        return sThis.datosST_7.fecha_incapacidad_inicial;
    };
    setFecha_incapacidad_inicial = function(fechaOci) {
        sThis.datosST_7.fecha_incapacidad_inicial = fechaOci;
    };
    getAccidente_trayecto = function() {
        return sThis.datosST_7.accidente_trayecto;
    };
    setAccidente_trayecto = function(acci) {
        sThis.datosST_7.accidente_trayecto = acci;
    };
    getMedico = function() {
        return sThis.datosST_7.medico;
    };
    setMedico = function(med) {
        sThis.datosST_7.medico = med;
    };
    getAuo = function() {
        return sThis.datosST_7.auo;
    };
    setAuo = function(auo) {
        sThis.datosST_7.auo = auo;
    };
    getFirma_trabajador = function() {
        return sThis.datosST_7.firma_trabajador;
    };
    setFirma_trabajador = function(fir) {
        sThis.datosST_7.firma_trabajador = fir;
    };
    getCopia_entregada = function() {
        return sThis.datosST_7.copia_entregada;
    };
    setCopia_entregada = function(copi) {
        sThis.datosST_7.copia_entregada = copi;
    };
    getFecha_copia_entregada = function() {
        return sThis.datosST_7.fecha_copia_entregada;
    };
    setFecha_copia_entregada = function(f_copi) {
        sThis.datosST_7.fecha_copia_entregada = f_copi;
    };
    getSt1 = function() {
        return sThis.datosST_7.st1;
    };
    setSt1 = function(st1) {
        sThis.datosST_7.st1 = st1;
    };
    getSt2 = function() {
        return sThis.datosST_7.st2;
    };
    setSt2 = function(st2) {
        sThis.datosST_7.st2 = st2;
    };
    muestra_todo = function() {
        return {
            id: id,
            cita: sThis.datosST_7.cita,
            tipo: sThis.datosST_7.tipo,
            patron: sThis.datosST_7.patron,
            oci: sThis.datosST_7.oci,
            paciente: sThis.datosST_7.paciente,
            fecha_accidente: sThis.datosST_7.fecha_accidente,
            folio_incapacidad_inicial: sThis.datosST_7.folio_incapacidad_inicial, //folio de la incapacidad en caso de existir
            fecha_incapacidad_inicial: sThis.datosST_7.fecha_incapacidad_inicial, // fecha incapacidad inicial en caso de existir
            accidente_trayecto: sThis.datosST_7.accidente_trayecto, // si / no
            medico: sThis.datosST_7.medico,
            auo: sThis.datosST_7.auo,
            firma_trabajador: sThis.datosST_7.firma_trabajador, //si / no        
            copia_entregada: sThis.datosST_7.copia_entregada, // si / no 
            fecha_copia_entregada: sThis.datosST_7.fecha_copia_entregada,
            st1: sThis.datosST_7.st1, // si / no ya calificado
            st2: sThis.datosST_7.st2, //si  / no alta de paciente
            archivo: sThis.datosST_7.archivo,

        };
    }
    return {
        getOci: getOci,
        setOci: setOci,
        getCita: getCita,
        setCita: setCita,
        muestra_todo: muestra_todo,
        getArchivo: getArchivo,
        setArchivo: setArchivo,
        getPaciente: getPaciente,
        setPaciente: setPaciente,
        getTipo: getTipo,
        getFecha_accidente: getFecha_accidente,
        setFecha_accidente: setFecha_accidente,
        getFolio_incapacidad_inicial: getFolio_incapacidad_inicial,
        setFolio_incapacidad_inicial: setFolio_incapacidad_inicial,
        getFecha_incapacidad_inicial: getFecha_incapacidad_inicial,
        setFecha_incapacidad_inicial: setFecha_incapacidad_inicial,
        getFecha_accidente: getFecha_accidente,
        setFecha_accidente: setFecha_accidente,
        getAccidente_trayecto: getAccidente_trayecto,
        setAccidente_trayecto: setAccidente_trayecto,
        getMedico: getMedico,
        setMedico: setMedico,
        getAuo: getAuo,
        setAuo: setAuo,
        getFirma_trabajador: getFirma_trabajador,
        setFirma_trabajador: setFirma_trabajador,
        getCopia_entregada: getCopia_entregada,
        setCopia_entregada: setCopia_entregada,
        getFecha_copia_entregada: getFecha_copia_entregada,
        setFecha_copia_entregada: setFecha_copia_entregada,
        getSt1: getSt1,
        setSt1: setSt1,
        getSt2: getSt2,
        setSt2: setSt2
    }

};
module.exports = ST_7;