var Cita = require('../clases/class_cita')
var guardar_registro = require('../consultas_db/guardar_registro');
var buscar_id = require('../consultas_db/buscar_id');
// Script para crear clase desde la opcion de generar cita

// recibira JSON de cita y del documento 
// d_auo: datos del auo
// d_cita: contienen los datos de la crear_cita
// d_documento: tiene los datos del documento a guardar
// d_paciente: contiene los datos del paciente


const crear_cita = function(d_documento) {

    /*var d_patron = p_patron || (p_patron = {
        razon_social: "",
        registro_patronal: "",
        direccion: ""
    });

    var d_oci = p_oci || (p_oci = {
        id: "",
        serie: "",
        tipo: "oci",
        fecha_incapacidad: "",
        nombre_paciente: "",
        no_seguro: "",
        archivo: ""
    });
*/

    var cita = Cita();
    cita.setAuo(d_documento.auo);
    cita.setHora(d_documento.hora);
    cita.setFecha(d_documento.fecha);
    cita.setDoc_completa(d_documento.doc_completa);
    cita.setNota(d_documento.nota);
    cita.setTipo(d_documento.tipo);

    //var crear_paciente = require('./crear_paciente');
    //var crear_patron = require('./crear_patron');
    //var crear_oci = require('./crear_oci');
    //const patron = crear_patron(d_patron).muestra_todo();
    //const paciente = crear_paciente(d_paciente).muestra_todo();
    //const oci = crear_oci(d_oci).muestra_todo();



    if (d_documento.tipo == "st3") {

        var crear_paciente = require('./crear_paciente');
        const paciente = crear_paciente(d_documento).muestra_todo();


        const St3 = require('../clases/class_st3');
        var st3_creada = St3(); // crea el objeto st3

        st3_creada.setArchivo("Citados"); // asigna propiedad archivo

        const datos_st3 = st3_creada.muestra_todo(); // obtiene los datos del objeto
        guardar_registro(d_documento.tipo, datos_st3); // guarda el registro

        cita.setDocumento(datos_st3); // vincula el documento a la cita creada
        const g_cita = cita.muestra_todo(); // obtiene los datos del objeto dicta
        console.log(g_cita);
        guardar_registro("cita", g_cita)
            .then(()=>{
                return "cita gurdada con st3";
            }) // guarda la cita
            .catch((error)=>{
                return error;
            })
        

    } else if (d_documento.tipo == "st3_rev") {

        var crear_paciente = require('./crear_paciente');
        const paciente = crear_paciente(d_paciente).muestra_todo();

        const parametros_busqueda = { "Paciente.No_seguro": paciente.no_seguro };
        const buscar_antecedente = buscar_id("st3", parametros_busqueda);

        const St3_rev = require('./crear_st3_rev');

        const st3_rev_creada = St3_rev(d_documento, buscar_antecedente, paciente);
        st3_rev_creada.setArchivo("citados");

        const datos_st3_rev = st3_rev_creada.muestra_todo();
        guardar_registro(d_documento.tipo, datos_st3_rev);

        cita.setDocumento(datos_st3_rev);
        const g_cita = cita.muestra_todo();

        guardar_registro("cita", g_cita);

        return 1;

    } else if (d_documento.tipo == "st4") {

        var crear_paciente = require('./crear_paciente');
        const paciente = crear_paciente(d_paciente).muestra_todo();

        const St4 = require('./crear_st4');
        var st4_creada = St4(d_documento, paciente);

        st4_creada.setArchivo("citados");

        const datos_st4 = st4_creada.muestra_todo();
        guardar_registro(d_documento.tipo, datos_st4);

        cita.setDocumento(datos_st4);
        const g_cita = cita.muestra_todo();

        guardar_registro("cita", g_cita);

        return 1;

    } else if (d_documento.tipo == "st4_rev") {

        var crear_paciente = require('./crear_paciente');
        const paciente = crear_paciente(d_paciente).muestra_todo();

        const parametro_busqueda = { "Paciente.No_seguro": paciente.no_seguro };
        const buscar_antecedente = buscar_id("st4", parametros_busqueda);

        const St4_rev = require('./crear_st4_rev');

        const st4_rev_creada = St4_rev(d_documento, paciente);
        st4_rev_creada.setArchivo("citados");

        const datos_st4_rev = st4_rev_creada.muestra_todo();
        guardar_registro(d_documento.tipo, datos_st4_rev);

        cita.setDocumento(datos_st4_rev);
        const g_cita = cita.muestra_todo();

        guardar_registro("cita", g_cita);

        return 1;

    } else if (d_documento.tipo == "st6") {


        var crear_patron = require('./crear_patron');
        const patron = crear_patron(d_patron).muestra_todo();

        var crear_paciente = require('./crear_paciente');
        const paciente = crear_paciente(d_paciente).muestra_todo();

        const St6 = require('./crear_st6');
        var st6_creada = St6(d_documento, paciente, patron);

        st6_creada.setArchivo("citados");

        const datos_st6 = st6_creada.muestra_todo();
        guardar_registro(d_documento.tipo, datos_st6);

        cita.setDocumento(datos_st6);
        const g_cita = cita.muestra_todo();

        guardar_registro("cita", g_cita);

        return 1;

    } else if (d_documento.tipo == "st7") {

        var crear_oci = require('../actions/crear_oci');
        const oci = crear_oci();
        oci.setSerie(d_documento.serie);
        const oc = oci.muestra_todo();

        const crear_patron = require('../actions/crear_patron');
        const patron = crear_patron();
        patron.setRegistro(d_documento.registro);
        patron.setRazon_social(d_documento.razon_social);
        patron.setDireccion(d_documento.direccion);
        const pat = patron.muestra_todo();


        var crear_paciente = require('../actions/crear_paciente');
        const paciente = crear_paciente(d_documento).muestra_todo();
    

        const St7 = require('./crear_st7');
        var st7_creada = St7(d_documento, paciente, pat, oc);

        st7_creada.setArchivo("citados");

        const datos_st7_creada = st7_creada.muestra_todo();
        guardar_registro(d_documento.tipo, datos_st7_creada);

        cita.setDocumento(datos_st7_creada);
        const g_cita = cita.muestra_todo();

        guardar_registro("cita", g_cita)
            .then(()=>{
                return "cita gurdada con st7";
            }) // guarda la cita
            .catch((error)=>{
                return error;
            })

    } else if (d_documento == "st8") {

        var crear_paciente = require('./crear_paciente');
        const paciente = crear_paciente(d_paciente).muestra_todo();

        const St8 = require('./crear_st8');

        if (d_documento.tipo_antecedente == "st7") {

            const parametro_busqueda = ({ "Paciente.No_seguro": paciente.no_seguro }, { "Fecha_accidente": d_documento.fecha_antecedente });
            const d_antecedente = buscar_id("st7", parametro_busqueda);

            const st8_creada = St8(d_documento, d_antecedente);

            st8_creada.setArchivo("citados");

            const datos_st8 = st8_creada.muestra_todo();
            guardar_registro(d_documento.tipo, datos_st8);

            cita.setDocumento(datos_st8);
            const g_cita = cita.muestra_todo();

            guardar_registro("cita", g_cita);

            return 1;

        } else if (d_documento.tipo_antecedente == "st9") {
            const parametro_busqueda = ({ "Paciente.No_seguro": paciente.no_seguro }, { "Fecha_primera_consulta": d_documento.fecha_antecedente });
            const d_antecedente = buscar_id("st9", parametro_busqueda);

            const st8_creada = St8(d_documento, d_antecedente);

            st8_creada.setArchivo("citados");

            const datos_st8 = st8_creada.muestra_todo();
            guardar_registro(d_documento.tipo, datos_st8);

            cita.setDocumento(datos_st8);
            const g_cita = cita.muestra_todo();

            guardar_registro("cita", g_cita);

            return 1;

        } else {
            return 0;
        }

    } else if (d_documento.tipo == "st9") {

        var crear_oci = require('./crear_oci');
        const oci = crear_oci(d_oci).muestra_todo();

        var crear_paciente = require('./crear_paciente');
        const paciente = crear_paciente(d_paciente).muestra_todo();

        const St9 = require('./crear_st9');
        const st9_creada = St9(d_documento, paciente, oci);

        st9_creada.setArchivo("citados");

        const datos_st9 = st9_creada.muestra_todo();
        guardar_registro(d_documento.tipo, datos_st9_creada);

        cita.setDocumento(datos_st9);
        const g_cita = cita.muestra_todo();

        guardar_registro("cita", g_cita);

        return 1;
    } else {
        return 0;
    }


};

module.exports = crear_cita;