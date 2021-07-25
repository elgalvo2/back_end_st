//import logo from './logo.svg';
import './App.css';

import Componente from './components/Componente';
import Propiedades from  './components/Propiedades';
import RenderizadoCondicional from "./components/Renderizado";
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6,EventosES7, MasSobreEventos} from './components/Eventos';
import Padre from './components/Comunicacion_componentes';
import CicloVida from'./components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';
import HooksPersonalizados from './components/HooksPersonalizados';
import Referencias from './components/Referencias';
import Formularios from './components/Formularios';
import Estilos from './components/Estilos';
import CrudApp from './components/CrudApp';
import PruebaConsultaApi from './components/PruebaConsultaApi';

function App() {
  return (
    <div>
      <h2>CRUD APP</h2>
      <CrudApp/>
      <PruebaConsultaApi/>
    </div>
  );
}

export default App;



 /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section>
          <Componente msg="Hola, soy un componente "/>
          <hr></hr>
          <Propiedades cadena="Esto es una cadena de texto"
           numero = {19} 
           booleano={true} 
           arreglo={[1,2,3]} 
           objeto={{nombre:"Luis Galvez", no_seguro:"123456"}}
           funcion = {(num) => num*num}
           elementoReact = {<i>Esto es un elemento React</i>} 
           componenteReact = {<Componente msg="Soy un componente pasado como prop"/>}/>
           <hr></hr>
           <RenderizadoCondicional/>
           <hr></hr>
           <RenderizadoElementos/>
           <hr></hr>
           <EventosES6/>
           <hr/>
           <EventosES7/>
           <hr/>
           <MasSobreEventos/>
           <hr/>
           <Padre/>
           <hr/>
           <CicloVida/>
           <hr/>
           
           <ContadorHooks/>
            
           <hr/>
           <ScrollHooks/>    
           <hr/>
           <RelojHooks/>
           <hr/>
           <AjaxHooks/>
           <hr/>
           <HooksPersonalizados/>
           <hr/>
           <Referencias/>
           <hr/>
           <Formularios/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <Estilos/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
        </section> 
      </header>
    </div>*/