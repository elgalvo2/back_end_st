var Paciente = function() { // validaciones de fechas y datos en HTML
    var sThis = this;
    this.datosPaciente = {
        No_seguro: "",
        Nombre: "",
        Apellido: "",
        Telefono: ""
    };
    getNo_seguro = function() {
        return sThis.datosPaciente.No_seguro;
    };
    setNo_seguro = function(nss) {
        sThis.datosPaciente.No_seguro = nss;
    };

    getNombre = function() {
        return sThis.datosPaciente.Nombre;
    };
    setNombre = function(nom) {
        sThis.datosPaciente.Nombre = nom;
    };

    getApellido = function() {
        return sThis.datosPaciente.Apellido;
    };
    setApellido = function(ape) {
        sThis.datosPaciente.Apellido = ape;
    };

    getTelefono = function() {
        return sThis.datosPaciente.Telefono;
    };
    setTelefono = function(tel) {
        sThis.datosPaciente.Telefono = tel;
    };


    validar_nss = function(nss) { // El numero de seguro social del imss consta de 10 digitos... validar que sean solo numeros enteros y que sean solo 10  
        if ((nss.length() == 10) && (/^[0-9]*$/.test(nss))) {
            return 1;
        } else {
            return 0;
        };
    };
    validar_telefono = function(tel) { // El numero de telefono son 10 digitos
        if ((tel.length() == 10) && (/^[0-9]*$/.test(tel))) {
            return 1;
        } else {
            return 0;
        };
    };
    validar_nombre = function(nom) {
        if (/^[a-zA-Z]*$/.test(nom)) {
            return 1;
        } else {
            return 0;
        };
    };
    validar_apellido = function(ape) {
        if (/^[a-zA-Z]*$/.test(ape)) {
            return 1;
        } else {
            return 0;
        };
    };
    muestra_todo = function() {
            return {
                No_seguro: sThis.datosPaciente.No_seguro,
                Nombre: sThis.datosPaciente.Nombre,
                Apellido: sThis.datosPaciente.Apellido,
                Telefono: sThis.datosPaciente.Telefono
            };
        }
        /* comprobacion_exitoza = function() {
        const v_nss = validar_nss;
        const v_tel = validar_tel;
        const v_nom = validar_nombre;
        const v_ape = validar_apellido;

        if (v_nss == 1 && v_tel == 1 && v_nom == 1 && v_ape == 1) {
            return {
                mensaje: "Comprobacion exitosa!.",
                valor: 1
            }
        } else if (v_tel == 0) {
            return {
                mensaje: "numero de telefono erroneo. Inténtalo de nuev.",
                valor: 0
            };
        } else if (v_nss == 0) {
            return {
                mensaje: "numero de seguridad social erroneo. Inténtalo de nuevo.",
                valor: 0
            };
        } else if (v_nom == 0) {
            return {
                mensaje: "Formato de nombre erroneo. Inténtalo de nuev.",
                valor: 0
            };
        } else if (v_ape == 0) {
            return {
                mensaje: "formato de apellido erroneo. Inténtalo de nuev.",
                valor: 0
            };
        }
    };
*/
    return {
        getNo_seguro: getNo_seguro,
        setNo_seguro: setNo_seguro,
        getNombre: getNombre,
        setNombre: setNombre,
        getApellido: getApellido,
        setApellido: setApellido,
        getTelefono: getTelefono,
        setTelefono: setTelefono,
        validar_nss: validar_nss,
        validar_telefono: validar_telefono,
        validar_nombre: validar_nombre,
        validar_apellido: validar_apellido,
        muestra_todo: muestra_todo
    }
};

module.exports = Paciente;