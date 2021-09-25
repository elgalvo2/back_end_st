const models = require('../models/models_carpetas');
const mongoose = require('mongoose');



const folder_namer = (apellido)=>{
    const arr = apellido.split('')[0];
    if(arr === 'A' || arr === 'E' || arr === 'I' || arr === 'O' || arr === 'U' ){
        return  {
            "res":{
                "ok":true,
                "etiqueta":"A-E-I-O-U"
            }
        }
    }else if(arr === 'B' || arr === 'C' || arr === 'D' || arr === 'F'){
        return  {
            "res":{
                "ok":true,
                "etiqueta":"B-F"
            }
        }
    }else if(arr === 'G' || arr === 'H' || arr === 'J' || arr === 'K'){
        return  {
            "res":{
                "ok":true,
                "etiqueta":"G-K"
            }
        }
    }else if(arr === 'L' || arr === 'M' || arr === 'N'){
        return  {
            "res":{
                "ok":true,
                "etiqueta":"L-N"
            }
        }
    }else if(arr === 'Ñ' || arr === 'P' || arr === 'Q' || arr === 'R'){
        return  {
            "res":{
                "ok":true,
                "etiqueta":"Ñ-R"
            }
        }
    }else if(arr === 'S' || arr === 'T' || arr === 'V'){
        return  {
            "res":{
                "ok":true,
                "etiqueta":"S-V"
            }
        }
    }else if(arr === 'W' || arr === 'X' || arr === 'Y' || arr === 'Z'){
        return {
            "res":{
                "ok":true,
                "etiqueta":"W-Z"
            }
        }
    }else{
        return {
                "res":{
                    "ok":false,
                    "etiqueta":"-"
                }
            }
    }
    
}

module.exports = folder_namer;