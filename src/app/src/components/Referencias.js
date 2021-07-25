import React, {createRef, useRef} from 'react';






export default function Referencias(){

    let refMenuButton = useRef(),
    refMenu = useRef();



    const handleToggleMenu = (e)=>{
       
        if(refMenuButton.current.textContent === 'Menú'){
            refMenuButton.current.textContent = 'Cerrar';
            refMenu.current.style.display = 'block';
        }else{
            refMenuButton.current.textContent = 'Menú';
            refMenu.current.style.display = 'none';
        };


       
       /* const $menu = document.getElementById('menu');

        if(e.target.textContent === 'Menú'){
            e.target.textContent = "Cerrar";
            $menu.style.display = 'block';
        }else{
            e.target.textContent = "Menú";
            $menu.style.display = 'none';
        }*/
    }

    return(
        <>
            <h2>Referencias</h2>
            <button /*id="menu-btn"*/ ref = {refMenuButton} onClick={handleToggleMenu}>Menú</button>
            <nav /*id='menu'*/ ref={refMenu} style={{display:'none'}}> 
            <a href="">Citas</a>
            <br/>
            <a href="">Generar</a>
            <br/>
            <a href="">Recibir</a>
            <br/>
            <a href="">Relacionar</a>
            <br/>
            <a href="">Más</a>
            <br/>
            <a href="">Configuración</a>
            <br/>
            </nav>
        </>
    )


}