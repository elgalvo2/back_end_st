import React, {Component} from 'react';

export class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state={
            contador:0,
        };

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
       
    }
    sumar(e){
        console.log(this);
        console.log("sumando");
        this.setState({
            contador:this.state.contador+1,
        });
    }
    restar(e){
        console.log(this);
        console.log("restando");
        this.setState({
            contador:this.state.contador-1,
        });
    }

    
    render(){
        return(
            <div>
                <h2>Eventos en Componentes de clase version ES6</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>

            </div>
        )
    }
};


// properties initializer


export class EventosES7 extends Component{
    state={
        contador:0,
    }
        sumar=(e) =>{
            console.log(this);
            console.log("sumando");
            this.setState({
                contador:this.state.contador+1,
            });
        }
            

        restar=(e)=>{
            console.log(this);
            console.log("restando");
            this.setState({
                contador:this.state.contador-1,
            });
        }
        
        render(){
            return(
                <div>
                    <h2>Eventos en Componentes de clase version ES7</h2>
                    <h3>{this.state.contador}</h3>
                    <nav>
                        <button onClick={this.sumar}>+</button>
                        <button onClick={this.restar}>-</button>
                    </nav>
    
                </div>
            )
        }
    };

    function Boton(props){
        return (
            <button onClick={props.myOwnClick}>Boton Hecho Componente</button>
        )
    }



    export class MasSobreEventos extends Component{
        
        handleClick = (e, mensaje)=>{
            console.log(mensaje);
        }
        
        render(){
            return (
                <div>
                <h2>
                    Mas sobre enventos
                </h2>
                 {/*
                <button onClick={(e)=>this.handleClick(this.e,"Hola, pasando parametro desde evento")}>Saludae
                </button>
                 b
           Evento Personalizado*/}
                <Boton
                    myOwnClick ={(e)=>
                        this.handleClick(this.e,"Hola, pasando parametro desde evento")
                    }
                    
                />
                    
                    
                </div>
            )
        }
    }