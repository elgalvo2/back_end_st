var Cita = function() { // validaciones de fechas y datos en HTML
    var sThis = this;
    this.datosCita = {
        auo: "",
        hora: "",
        fecha: "",
        documento: {},
        doc_completa: "",
        nota: "",
        tipo:"",
        St7: {},
        St3: {},
        St3_rev: {},
        St4: {},
        St4_rev: {},
        St6: {},
        St87: {},
        St89: {},
        St9: {}

    };
    getTipo = function(){
        return sThis.datosCita.tipo;
    }
    setTipo = function(tip){
        sThis.datosCita.tipo = tip
    }
    getDocumento = function() {
        return sThis.datosCita.documento;
    };
    setDocumento = function(documentos,param) {
        if(param == "st7"){
            sThis.datosCita.St7 = documentos;
        }else if(param == "st3"){
            sThis.datosCita.St3 = documentos;
        }else if(param == 'st3_rev'){
            sThis.datosCita.St3_rev = documentos;
        }else if(param =='st4'){
            sThis.datosCita.St4 = documentos;
        }else if(param == 'st4_rev'){
            sThis.datosCita.St4_rev = documentos;
        }else if(param == 'st6'){
            sThis.datosCita.St6 = documentos;
        }else if(param =='st87'){
            sThis.datosCita.St87 = documentos;
        }else if(param== 'st89'){
            sThis.datosCita.St89 = documentos;
        }else if(param == 'st9'){
            sThis.datosCita.St9 = documentos;
        }else{
            return 1;
        }
            
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
            Doc_completa: sThis.datosCita.doc_completa,
            Nota: sThis.datosCita.nota,
            Tipo: sThis.datosCita.tipo,
            St7: sThis.datosCita.St7,
            St3: sThis.datosCita.St3,
            St3_rev: sThis.datosCita.St3_rev,
            St4: sThis.datosCita.St4,
            St4_rev: sThis.datosCita.St4_rev,
            St6: sThis.datosCita.St6,
            St87: sThis.datosCita.St87,
            St89: sThis.datosCita.St89,
            St9: sThis.datosCita.St9
            };
    };
    return {
        getTipo:getTipo,
        setTipo: setTipo,
        muestra_todo: muestra_todo,
        getDocumento: getDocumento,
        setDocumento: setDocumento,
        getAuo: getAuo,
        setAuo: setAuo,
        getHora: getHora,
        setHora: setHora,
        getFecha: getFecha,
        setFecha: setFecha,
        getDoc_completa: getDoc_completa,
        setDoc_completa: setDoc_completa,
        getNota: getNota,
        setNota: setNota,
    };
};
module.exports = Cita;