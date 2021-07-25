import React, {useState,useEffect} from 'react';

export default function RelojHooks(){
    const [hora,setHora]=useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);


    const tictac = (valor)=>{
        valor?setVisible(valor):setVisible(valor);
    }

    useEffect(()=>{
        let temporizador;


        if(visible){
            temporizador = setInterval(()=>{
                setHora(new Date().toLocaleTimeString());
            },1000);
        }else {
            
            return ()=>{
                console.log("Fase de desmontaje");
                clearInterval(temporizador);
            }
        }
        
    },[visible]);




    return(
        <>
            <h2>Reloj Con Hooks</h2> 
            <button onClick={()=>tictac(true)}>Iniciar</button>
            <button onClick={()=>tictac(false)}>Detener</button>
            {visible?<Reloj hora={hora}/>:<h2></h2>}   
        </>
    )
};

function Reloj({hora}){
    return <h3>{hora}</h3>
};