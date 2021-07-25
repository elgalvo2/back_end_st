import React, { useState } from 'react';

/*
export default function Formularios (){

    const [nombre,setNombre] = useState('');
    const [sabor,setSabor] = useState('');
    const [lenguaje, setLenguaje] = useState('');
    const [terminos, setTerminos] = useState(false);

    const handdleSubmit = e => {
        e.preventDefault();
        alert('El formulario se ha enviado');
    };
    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handdleSubmit}>
                <label htmlfor='nombre'>Nombre: </label>
                <input type="text" id='nombre' name='nombre' value = {nombre} onChange={(e)=>
                    setNombre(e.target.value)
                } 
                />
                <p>Elije tu sabor Js favorito</p>
                <input type='radio' id='vanilla' name='sabor' value= {sabor} onChange = {(e)=>
                    setSabor(e.target.value)
                } 
                ></input>
                <label htmlfor='vanilla'>vanilla</label>

                <input type='radio' id='react' name='sabor' value= {sabor} onChange = {(e)=>
                    setSabor(e.target.value)
                }defaultChecked ></input>
                <label htmlfor='react'>react</label>

                <input type='radio' id='angular' name='sabor' value= {sabor} onChange = {(e)=>
                    setSabor(e.target.value)
                } ></input>
                <label htmlfor='angular'>angular</label>

                <input type='radio' id='vue' name='sabor' value= {sabor} onChange = {(e)=>
                    setSabor(e.target.value)
                } ></input>
                <label htmlfor='vue'>vue</label>
                <p>Escoge tu lenguaje favotiro</p>  
                <select 
                name="lenguaje" defaultValue = '' onChange={(e)=>setLenguaje(e.target.value)}>
                <option value=''>---</option>
                <option value='js'>JavaScript</option>
                <option value='php'>Php</option>
                <option value='Python'>Python</option>
                </select>
                <br></br>
                <label>Acepto terminos y condiciones</label>
                <input type='checkbox' id='terminos' name='termino' onChange={(e)=>setTerminos(e.target.checked)}/>
                <input type='submit'></input>


            </form>
        </>
    )
}*/





export default function Formularios (){

    const [form,setForm] = useState({});
   
    const handdleChange = e => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    };

    const handdleChecked = e =>{
        setForm({
            ...form,
            [e.target.name]:e.target.checked
        })
    }

    const handdleSubmit = e => {
        e.preventDefault();
        alert('El formulario se ha enviado');
    };
    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handdleSubmit}>
                <label htmlfor='nombre'>Nombre: </label>
                <input type="text" id='nombre' name='nombre' value = {form.nombre} onChange={handdleChange
                } 
                />
                <p>Elije tu sabor Js favorito</p>
                <input type='radio' id='vanilla' name='sabor' value= {form.sabor} onChange = {handdleChange
                } defaultChecked  
                ></input>
                <label htmlfor='vanilla'>vanilla</label>

                <input type='radio' id='react' name='sabor' value= {form.sabor} onChange = {handdleChange
                 }></input>
                <label htmlfor='react'>react</label>

                <input type='radio' id='angular' name='sabor' value= {form.sabor} onChange = {handdleChange
                 } ></input>
                <label htmlfor='angular'>angular</label>

                <input type='radio' id='vue' name='sabor' value= {form.sabor} onChange = {handdleChange
                 } ></input>
                <label htmlfor='vue'>vue</label>
                <p>Escoge tu lenguaje favotiro</p>  
                <select 
                name="lenguaje" defaultValue = '' onChange = {handdleChange
                }>
                <option value=''>---</option>
                <option value='js'>JavaScript</option>
                <option value='php'>Php</option>
                <option value='Python'>Python</option>
                </select>
                <br></br>
                <label>Acepto terminos y condiciones</label>
                <input type='checkbox' id='terminos' name='termino' onChange = {handdleChecked
                 }/>
                <input type='submit'></input>


            </form>
        </>
    )
}