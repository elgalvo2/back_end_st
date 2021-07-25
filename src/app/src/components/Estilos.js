import React from 'react'
import './Estilos.css';
import moduleStyles from './Estilos.module.css'

export default function Estilos(){

    let myStyles = {
        borderRadius:".5rem",
        margin:'2rem auto',
        maxWidth: "50%"
    }
    return(
        <section className='estilos'>
            <h2>Estilod en React</h2>
            <h3 className='bg-react'>Estilos en hoja CSS en hoja externa</h3>
            <h3 className='bg-react' style={myStyles}>Estilos en linea </h3>
            <h3>Agregando Normalize con
                <br/>
                <code>
                    @import-normalize
                </code>
            </h3>
            <h3 className={moduleStyles.error}> Estilos con modulos </h3>
            <h3 className={moduleStyles.succes}> Estilos con modulos </h3>
        </section>
    )
}