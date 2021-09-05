var Cita = require('../clases/class_cita')
var guardar_registro = require('../consultas_db/guardar_registro');
var buscar_id = require('../consultas_db/buscar_id');
var guardar_cita_reg = require('../actions/guardar_cita_reg');


const crear_cita = async function(d_documento) {

    const cita = Cita();
    cita.setAuo(d_documento.auo);
    cita.setHora(d_documento.hora);
    cita.setFecha(d_documento.fecha);
    cita.setDoc_completa(d_documento.doc_completa);
    cita.setNota(d_documento.nota);
    cita.setTipo(d_documento.tipo);

   


    if (d_documento.tipo == "st3") {



        var crear_paciente = require('../actions/crear_paciente'); // crear paciente
        const paciente = crear_paciente(d_documento);
        const d_paciente = paciente.muestra_todo();

        const obtener_antecedente = require('../actions/obtener_antecedente');
        const antecedente = await obtener_antecedente(d_documento);


        const St3 = require('../actions/crear_st3');
        var st3_creada = St3(d_documento,antecedente,d_paciente); // crea el objeto st3

        st3_creada.setArchivo("Citados"); // asigna propiedad archivo

        const datos_st3 = st3_creada.muestra_todo(); // obtiene los datos del objeto
       
        const doc_guardado = await guardar_registro(d_documento.tipo, datos_st3); // guarda el registro

        cita.setId_documento(doc_guardado.id); // vincula el documento a la cita creada
        const g_cita = cita.muestra_todo(); // obtiene json

        const cit = await guardar_registro("cita", g_cita);
        return cit;
                

    } else if (d_documento.tipo == "st3_rev") {

        var crear_paciente = require('../actions/crear_paciente'); // crear paciente
        const paciente = crear_paciente(d_documento);
        const d_paciente = paciente.muestra_todo();


        const obtener_antecedente = require('../actions/obtener_antecedente');
        const antecedente = await obtener_antecedente(d_documento); // <---d_documento contiene  los parametro de busqueda



        const St3_rev = require('../actions/crear_st3_rev');
        var st3_rev_creada = St3_rev(d_documento,antecedente,d_paciente); // crea el objeto st3_rev

        st3_rev_creada.setArchivo("citados");

        const datos_st3_rev = st3_rev_creada.muestra_todo();

        const mensaje = await guardar_registro(d_documento.tipo, datos_st3_rev);
        

        cita.setId_documento(mensaje._id);

        const g_cita = cita.muestra_todo();

        const cit = await guardar_registro('cita',g_cita);

        return cit;

       

    } else if (d_documento.tipo == "st4") {

        
        var crear_paciente = require('../actions/crear_paciente'); // crear paciente
        const paciente = crear_paciente(d_documento);
        const d_paciente = paciente.muestra_todo();

        const St4 = require('../actions/crear_st4');
        var st4_creada = St4(d_documento, d_paciente);

        st4_creada.setArchivo("citados");

        const datos_st4 = st4_creada.muestra_todo();
        const doc_guardado = await guardar_registro(d_documento.tipo, datos_st4);

        cita.setId_documento(doc_guardado._id);
        const g_cita = cita.muestra_todo();

        const cit = await guardar_registro("cita", g_cita)
        return cit;

    } else if (d_documento.tipo == "st4_rev") {

      

        var crear_paciente = require('../actions/crear_paciente'); // crear paciente
        const paciente = crear_paciente(d_documento);
        const d_paciente = paciente.muestra_todo();

        const obtener_antecedente = require('../actions/obtener_antecedente');
        const antecedente = await obtener_antecedente(d_documento);


        const St4_rev = require('../actions/crear_st4_rev');
        var st4_rev_creada = St4_rev(d_documento,antecedente,d_paciente); // crea el objeto st3

        st4_rev_creada.setArchivo("Citados"); // asigna propiedad archivo

        const datos_st4_rev = st4_rev_creada.muestra_todo(); // obtiene los datos del objeto
       
        const doc_guardado = await guardar_registro(d_documento.tipo, datos_st4_rev); // guarda el registro

        cita.setId_documento(doc_guardado._id); // vincula el documento a la cita creada
        const g_cita = cita.muestra_todo(); // obtiene json

        const cit = await guardar_registro("cita", g_cita);
        return cit;


    } else if (d_documento.tipo == "st6") {


        const crear_patron = require('../actions/crear_patron');
        const patron = crear_patron(d_documento);
        pat = patron.muestra_todo();
    
        var crear_paciente = require('../actions/crear_paciente');
        const paciente = crear_paciente(d_documento);
        d_paciente = paciente.muestra_todo();
        

        const St6 = require('../actions/crear_st6');
        var st6_creada = St6(d_documento, d_paciente, pat);
        st6_creada.setArchivo("citados");

        const datos_st6 = st6_creada.muestra_todo();

        const doc_guardado = await guardar_registro(d_documento.tipo, datos_st6);

        cita.setId_documento(doc_guardado._id);
        const g_cita = cita.muestra_todo();

        const cit = await guardar_registro("cita", g_cita)
                
        return cit;


    } else if (d_documento.tipo == "st7") {


        var crear_oci = require('../actions/crear_oci');
        const oci = crear_oci(d_documento);
        //oci.setSerie(d_documento.serie);
        oc = oci.muestra_todo();

        const crear_patron = require('../actions/crear_patron');
        const patron = crear_patron(d_documento);
        pat = patron.muestra_todo();
    
        var crear_paciente = require('../actions/crear_paciente');
        const paciente = crear_paciente(d_documento);
        d_paciente = paciente.muestra_todo();
        
        // SE BUSCA PRIMERO SI EXISTE ST7 NO RECLAMADA PARA EVITAR DUPLICAR DOCUMENTOS ST7
        const existe_st7 = require('../actions/comprobar_st7_no_reclamada');
        const St7 = require('../actions/crear_st7');
        console.log(d_paciente);
        const st7_no_reclamada = await existe_st7(d_paciente.No_seguro);

        console.log('2',st7_no_reclamada)

    
            if(st7_no_reclamada.res.ok){
                const id_st7 = st7_no_reclamada._id;
                // modifica st7 existente
                const modifica_st7 = require('../consultas_db/modifica_st7_no_reclamada');
                const modificado_st7 = await modifica_st7(id_st7, d_paciente, pat, oc);
                console.log('3',modificado_st7)
                if(modificado_st7.res.ok){
                
                    cita.setId_documento(modificado_st7.res.st7._id);
                    const g_cita = cita.muestra_todo();
                    const cit = await guardar_registro("cita", g_cita);
                    console.log('cit_st7 no reclamda true',cit)  
                    return cit;
                }else{
                    return modificado_st7.res.respuesta;
                }
                      
            }else{
                var st7_creada = St7(d_documento, d_paciente, pat, oc);
                st7_creada.setArchivo("citados");

                const datos_st7_creada = st7_creada.muestra_todo();
                const doc_guardado = await guardar_registro(d_documento.tipo, datos_st7_creada);

                cita.setId_documento(doc_guardado._id);

                const g_cita = cita.muestra_todo();

                
                

                const cit = await guardar_registro("cita", g_cita);
                console.log('cit_st7 no reclamda false',cit) 
                      
                return cit;
            };
        

        
        

           

    } else if (d_documento.tipo == "st8") {

        var crear_paciente = require('../actions/crear_paciente'); // crear paciente
        const paciente = crear_paciente(d_documento);
        const d_paciente = paciente.muestra_todo();


        const St8 = require('../actions/crear_st8');
        const obtener_antecedente = require('../actions/obtener_antecedente');

        if (d_documento.tipo_antecedente == "st7") {

            
            
            const d_antecedente = await obtener_antecedente(d_documento);


            const st8_creada = St8(d_documento, d_antecedente,d_paciente);

            st8_creada.setArchivo("citados");


            const datos_st8 = st8_creada.muestra_todo();

            const doc_guardado = await guardar_registro(d_documento.tipo, datos_st8,d_documento.tipo_antecedente);

            cita.setId_documento(doc_guardado._id);
            
            const g_cita = cita.muestra_todo();
            
            const cit = await guardar_registro('cita',g_cita);

            return cit;

        } else if (d_documento.tipo_antecedente == "st9") {
            
            const d_antecedente = await obtener_antecedente(d_documento);

            const st8_creada = St8(d_documento, d_antecedente,d_paciente);

            st8_creada.setArchivo("citados");


            const datos_st8 = st8_creada.muestra_todo();
            const doc_guardado = await guardar_registro(d_documento.tipo, datos_st8,d_documento.tipo_antecedente);

            cita.setId_documento(doc_guardado._id);

            const g_cita = cita.muestra_todo();
    
            const cit = await guardar_registro('cita',g_cita);

            return cit;

        } else {
            return "no se entendieron los parametros";
        }

    } else if (d_documento.tipo == "st9") {

        var crear_oci = require('../actions/crear_oci'); // crear oci
        const oci = crear_oci(d_documento);
        oc = oci.muestra_todo();

        var crear_paciente = require('../actions/crear_paciente'); // crear paciente
        const paciente = crear_paciente(d_documento);
        d_paciente = paciente.muestra_todo();

        const crear_patron = require('../actions/crear_patron');
        const patron = crear_patron(d_documento);
        pat = patron.muestra_todo();
    
  
        const St9 = require('../actions/crear_st9'); // crear st9
        const st9_creada = St9(d_documento, d_paciente, oc, pat);
        st9_creada.setArchivo("citados"); // agrega citados a archivo st9
        

        const datos_st9_creada = st9_creada.muestra_todo();
        const doc_guardado = await guardar_registro(d_documento.tipo, datos_st9_creada);
        
        cita.setId_documento(doc_guardado._id);

        const g_cita = cita.muestra_todo();

        const cit = await guardar_registro("cita", g_cita)
                
        return cit;

        
    } else {
        return "no se guardo nada";
    };


};

module.exports = crear_cita;