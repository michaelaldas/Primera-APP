import React from 'react';
import Cursoform from './Cursoform';


function Cursos({cursos, onEliminarCursos}) {
    
    const recibir=()=>{
        var rec = document.getElementById("id").value;
        document.getElementById("escribir").innerHTML= "EL curso nuevo es :"+rec+""
    }
        const eliminarCursoHandler = (id) => {
        //console.log("eliminado curso de id: ", id);
        onEliminarCursos(id);
    }

//
    return (
        <div>
            <h2>Listado de cursos</h2>
            <hr/>
            <Cursoform />
            <div id='escribir'>
                <button onClick={recibir}>
                    Agregar
                </button>
            </div>
            <hr/>
            <ul>
                {
                    cursos.map( item => (
                        <li key={item.id}> {item.id} - {item.curso}
                            <button onClick={ ()=> eliminarCursoHandler(item.id) }>Eliminar curso</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

/*
const Cursos = () => {
    return (
        <div>
            <h2>Listado de cursos</h2>
        </div>
    );
}
*/
export default Cursos;