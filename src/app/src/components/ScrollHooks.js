import React, {useState, useEffect} from 'react';

export default function ScrollHooks(){

    const [scrollY,setScrollY] = useState(0);



    useEffect(()=>{
        console.log("Moviendo el scroll");

        const detectarScroll = ()=>{setScrollY(window.pageYOffset)};

        window.addEventListener("scroll",detectarScroll);


        return()=>window.removeEventListener("scroll",detectarScroll);
    });

    useEffect(()=>{
        console.log("Fase de actualizacion");
    });
    
    useEffect(()=>{
        console.log("Fase de montaje");
    },[]);

    useEffect(()=>{
        return ()=>{
            console.log("Fase de desmontaje");
        }
    })

    return(
        <>
            <h2>HOOK para ciclo de vida</h2>
            <p>Scroll y del navegador {scrollY}px</p>
        </>
    )
}