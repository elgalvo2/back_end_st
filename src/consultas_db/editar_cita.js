const models = require('./obtener_modelo');
const mongoose = require('mongoose')



var edit_app = async(id, props) => {
    var modelo = models['cita'];
    const {tipo} = props;
    // parametros de cita 
    const {fecha, hora, nota, doc_completa, auo} = props;
    const query_cita = {
       "Fecha":new Date(fecha),
       "Hora":hora,
       "Nota":nota,
       "Doc_completa":doc_completa,
       "Auo":auo,

    };
    // parametros del paciente 
    const {nombre, apellidos, no_seguro, telefono } = props;
    // parametros del documento 

    var query = {};
    if(tipo=='st7'){
        const {medico, auo, fecha_accidente, oci_serie, nom_patron, reg_patron, dir_patron} = props;
        query = {
            "Medico":medico,
            "Auo":auo,
            "Fecha_accidente":fecha_accidente,
            "Oci":[{
                "Serie":oci_serie,
            }],
            "Patron":[{
                "Razon_social":nom_patron,
                "Registro_patronal":reg_patron,
                "Direccion":dir_patron,
            }],
            "Paciente":[{
                "Nombre":nombre,
                "Apellido":apellidos,
                "No_seguro":no_seguro,
                "Telefono":telefono,
            }],
        }
    }else if(tipo == 'st8'){
        const {medico, auo, oci_serie, nom_patron, reg_patron, dir_patron} = props;
        query = {
            "Medico":medico,
            "Auo":auo,
            "Oci":[{
                "Serie":oci_serie,
            }],
            "Patron":[{
                "Razon_social":nom_patron,
                "Registro_patronal":reg_patron,
                "Direccion":dir_patron,
            }],
            "Paciente":[{
                "Nombre":nombre,
                "Apellido":apellidos,
                "No_seguro":no_seguro,
                "Telefono":telefono,
            }],
        }
    }else if(tipo == 'st3' || tipo === 'st3_rev' || tipo ==="st4" || tipo ==='st4_rev'){
        const {medico, auo} = props;
        query = {
            "Medico":medico,
            "Auo":auo,
            "Paciente":[{
                "Nombre":nombre,
                "Apellido":apellidos,
                "No_seguro":no_seguro,
                "Telefono":telefono,
            }]
        };
    }else if(tipo === 'st6'){
        const {nombre_beneficiario, parentesco, medico, auo,  nom_patron, reg_patron, dir_patron} = props;
        query = {
            "Medico":medico,
            "Auo":auo,
            "Nombre_beneficiario":nombre_beneficiario,
            "Parentesco_beneficiario": parentesco,
            "Patron":[{
                "Razon_social":nom_patron,
                "Registro_patronal":reg_patron,
                "Direccion":dir_patron,
            }],
            "Paciente":[{
                "Nombre":nombre,
                "Apellido":apellidos,
                "No_seguro":no_seguro,
                "Telefono":telefono,
            }],
        };

    };

    try{
        console.log('Query_cita',query_cita);
        const appt = await modelo.findOneAndUpdate({'_id':id},{'$set':query_cita},{new:true});
        const {Id_documento} = appt;
        console.log('cita editadaa',appt);
        //console.log('tipo',tipo);
        //console.log('query editar cita',query)
        modelo=models[tipo];
        const doc = await modelo.findOneAndUpdate({_id:Id_documento},query,{new:true});
        //console.log('doc_editado',doc)
        return true;
    }catch(err){
        console.log(err);
        return false;
    };

    

};

module.exports = edit_app;