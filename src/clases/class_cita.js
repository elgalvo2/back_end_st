var Cita = function() { // validaciones de fechas y datos en HTML
    var sThis = this;
    this.datosCita = {
        auo: "",
        hora: "",
        fecha: "",
        id_documento: "",
        doc_completa: "",
        nota: "",
        tipo:""

    };
    getTipo = function(){
        return sThis.datosCita.tipo;
    }
    setTipo = function(tip){
        sThis.datosCita.tipo = tip
    }
    getId_documento = function() {
        return sThis.datosCita.id_documento;
    };
    setId_documento = function(document) {
        sThis.datosCita.id_documento = document;
    };

    getAuo = function() {
        return sThis.datosCita.auo;
    };
    setAuo = function(auo) {
        sThis.datosCita.auo = auo;
    };

    getHora = function() {
        return sThis.datosCita.hora;
    };
    setHora = function(hora) {
        sThis.datosCita.hora = hora;
    };

    getFecha = function() {
        return sThis.datosCita.fecha;
    };
    setFecha = function(fecha) {
        sThis.datosCita.fecha = new Date(fecha);
    };

    getDoc_completa = function() {
        return sThis.datosCita.doc_completa;
    };
    setDoc_completa = function(doc_completa) {
        sThis.datosCita.doc_completa = doc_completa;
    };

    getNota = function() {
        return sThis.datosCita.nota;
    };
    setNota = function(nota) {
        sThis.datosCita.nota = nota;
    };

    muestra_todo = function() {
        return {
            Auo: sThis.datosCita.auo,
            Hora: sThis.datosCita.hora,
            Fecha: sThis.datosCita.fecha,
            Id_documento: sThis.datosCita.id_documento,
            Doc_completa: sThis.datosCita.doc_completa,
            Nota: sThis.datosCita.nota,
            Tipo: sThis.datosCita.tipo
            };
    };
    return {
        getTipo:getTipo,
        setTipo: setTipo,
        muestra_todo: muestra_todo,
        getId_documento: getId_documento,
        setId_documento: setId_documento,
        getAuo: getAuo,
        setAuo: setAuo,
        getHora: getHora,
        setHora: setHora,
        getFecha: getFecha,
        setFecha: setFecha,
        getDoc_completa: getDoc_completa,
        setDoc_completa: setDoc_completa,
        getNota: getNota,
        setNota: setNota
    };
};
module.exports = Cita;