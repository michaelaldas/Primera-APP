import React, {useState} from 'react';
function Cursoform(props) {
   
    const [texto, setTexto] = useState('');

    const textoIngresadoHandler=(event)=>{
        //console.log(event.target.value);
        setTexto(event.target.value);
    }

    const agregarCursoHandler=(event)=>{
        event.preventDefault();
        const nuevoCurso = {
            id: Math.floor(Math.random()*10000),
            curso: texto
        }
        console.log("Enviando formulario: ", nuevoCurso);
    }

    return (
        <form onSubmit={agregarCursoHandler}>
            <input type='text' 
            placeholder='Ingresa un nuevo curso' 
            onChange={textoIngresadoHandler}
            value={texto}
            />
            <button>Agregar curso</button>
        </form>
    );
}

export default Cursoform;