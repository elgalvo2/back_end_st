import React, {useState, useEffect} from 'react';





export default function PruebaConsultaApi(){
    const [datos,setDatos] = useState({});

    
useEffect(()=>{
    const getDocumentos = async(url)=>{
        let res = await fetch(url);
        
        let json = await res.json();

        console.log(json);

    };
    getDocumentos('https://localhost:5050/home');
},[]);





    return(
        <>
            <h1>Aqui esta el fragmento nuevo...</h1>
        </>
    )
}
