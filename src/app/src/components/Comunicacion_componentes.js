import React, {Component} from 'react';

export default class Padre extends Component{
    state={
        contador:0
    };

    incrementarContador = (e)=>{
        this.setState(
            {contador:this.state.contador+1}
        )
        console.log(this.state.contador)
    }

    render(){
        return(
            <>
            <h2>Comunicacion entre componentes</h2>
            <Hijo incrementarContador = {this.incrementarContador} mensaje='Mensaje para el hijo numero 1'/>
            <Hijo incrementarContador = {this.incrementarContador}
            mensaje='Mensaje para el hijo numero 2'/>
            </>
        )   
    }
}

function Hijo(props){
    return (
        <>
            <h3>{props.mensaje}</h3>
            <button onClick={props.incrementarContador}>+</button>
        </>
    )
}

