var ST_8 = function() { // validaciones de fechas y datos en HTML
    var sThis = this;
    this.datosST_8 = {
        id: "",
        tipo: "st8",
        tipo_antecedente: "",
        fecha_antecedente: "",
        antecedente: {}, // st7 o st9
        fecha_recaida: "",
        se_acepta_recaida: "", //se acepta recaida si / no
        medico: "",
        auo: "",
        copia_entregada: "", // si / no 
        fecha_copia_entregada: "",
        archivo: ""
    };
    setId = function(ID) {
        sThis.datosST_8.id = ID;
    }
    getId = function() {
        return sThis.datosST_8.id;
    }
    setFecha_antecedente = function(fecha_a) {
        sThis.datosST_8.fecha_antecedente = fecha_a;
    }
    getFecha_antecedente = function() {
        return sThis.datosST_8.fecha_antecedente;
    }
    setTipo_antecedente = function(ante) {
        sThis.datosST_8.tipo_antecedente = ante;
    }
    getTipo_antecedente = function() {
        return sThis.datosST_8.tipo_antecedente;
    }
    getArchivo = function() {
        return sThis.datosST_8.archivo;
    };
    setArchivo = function(archi) {
        sThis.datosST_8.archivo = archi;
    }
    getTipo = function() {
        return sThis.datosST_8.tipo;
    }
    getAntecedente = function() {
        return sThis.datosST_8.antecedente;
    };
    setAntecedente = function(antecedente) {
        sThis.datosST_8.antecedente = antecedente;
    };
    getFecha_recaida = function() {
        return sThis.datosST_8.fecha_recaida;
    };
    setFecha_recaida = function(fecha_consu) {
        sThis.datosST_8.fecha_primera_consulta = fecha_consu;
    };
    getSe_acepta_recaida = function() {
        return sThis.datosST_8.se_acepta_recaida;
    };
    setSe_acepta_recaida = function(recaida) {
        sThis.datosST_8.se_acepta_recaida = recaida;
    };
    getMedico = function() {
        return sThis.datosST_8.medico;
    };
    setMedico = function(med) {
        sThis.datosST_8.medico = med;
    };
    getAuo = function() {
        return sThis.datosST_8.auo;
    };
    setAuo = function(auo) {
        sThis.datosST_8.auo = auo;
    };
    getCopia_entregada = function() {
        return sThis.datosST_8.copia_entregada;
    };
    setCopia_entregada = function(copi) {
        sThis.datosST_8.copia_entregada = copi;
    };
    getFecha_copia_entregada = function() {
        return sThis.datosST_8.fecha_copia_entregada;
    };
    setFecha_copia_entregada = function(f_copi) {
        sThis.datosST_8.fecha_copia_entregada = f_copi;
    };
    devuelve_todo = function() {
        return {
            Tipo: sThis.datosST_8.tipo,
            Antecedente: sThis.datosST_8.antecedente, // st7 o st9
            Fecha_antecedente: sThis.datosST_8.fecha_antecedente,
            Fecha_recaida: sThis.datosST_8.fecha_recaida,
            Se_acepta_recaida: sThis.datosST_8.se_acepta_recaida, //se acepta recaida si / no
            Medico: sThis.datosST_8.medico,
            Auo: sThis.datosST_8.auo,
            Copia_entregada: sThis.datosST_8.copia_entregada, // si / no 
            Fecha_copia_entregada: sThis.datosST_8.fecha_copia_entregada,
            Archivo: sThis.datosST_8.archivo
        };
    }

    return {
        setId: setId,
        getId: getId,
        getTipo_antecedente: getTipo_antecedente,
        setTipo_antecedente: setTipo_antecedente,
        getFecha_antecedente: getFecha_antecedente,
        setFecha_antecedente: setFecha_antecedente,
        getArchivo: getArchivo,
        setArchivo: setArchivo,
        getTipo: getTipo,
        getAntecedente: getAntecedente,
        setAntecedente: setAntecedente,
        getFecha_recaida: getFecha_recaida,
        setFecha_recaida: setFecha_recaida,
        getSe_acepta_recaida: getSe_acepta_recaida,
        setSe_acepta_recaida: setSe_acepta_recaida,
        getMedico: getMedico,
        setMedico: setMedico,
        getAuo: getAuo,
        setAuo: setAuo,
        getCopia_entregada: getCopia_entregada,
        setCopia_entregada: setCopia_entregada,
        getFecha_copia_entregada: getFecha_copia_entregada,
        setFecha_copia_entregada: setFecha_copia_entregada,

    };

};
module.exports = ST_8;