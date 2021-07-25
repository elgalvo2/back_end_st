import React , {useState} from 'react';

export default function ContadorHooks(props){
    //console.log(useState());
    const [Contador,setContador]=useState(0);



    const sumar = ()=>setContador(Contador+1);
    const restar = ()=>setContador(Contador-1);



    return(
        <>
            <h2>Hooks-useState</h2>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <p>Contador de {props.titulo}</p>
            <h3>{Contador}</h3>
           
        </>
    )
}


ContadorHooks.defaultProps = {
    titulo: "clicks",
}