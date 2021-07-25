import React, {useState, useEffect} from 'react'

const initialForm = {
    name:'',
    constellation: '',
    id: null,
}



const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {

    const [form, setForm] = useState({initialForm});

    const handdleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    };
    const handdleSubmit = (e) =>{
        e.preventDefault();

        if(!form.name || !form.constellation){
            alert('Datos incompletos');
            return;
        };

        if(form.id=== null){
            createData(form)
        }else{
            updateData(form)
        }

        handdleReset();
    };
    const handdleReset = (e)=>{
        setForm(initialForm);
        setDataToEdit(null);
    };

    return (
        <div>
            <h3>Agregar</h3>
            <form onSubmit={handdleSubmit}>
                <input type='text' name='name' placeholder="Nombre" onChange={handdleChange} value={form.name}/>
                <input type='text' name='constellation' placeholder="Constelación" onChange={handdleChange} value={form.constellation}/>
                <input type="submit" value="Enviar" />
                <input type='reset' value ="Limpar" onClick={handdleReset}/>
            </form>
        </div>
    )
}

export default CrudForm;