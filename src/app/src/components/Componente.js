

/// componente como objeto

/*class Componente extends Component{

    render(){
        return <h2>{this.props.msg}</h2>
    }


}
*/


// Componente funcional
/*
function Componente(props){
    return <h2>{props.msg}</h2>
}
*/

// componente funcional arrow

const Componente = props => <h2>{props.msg}</h2>
export default Componente ;