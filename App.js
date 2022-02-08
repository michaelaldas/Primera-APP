import React, {useState} from "react";
//import Contador from "./components/Contador";
import Cursos from "./components/Cursos";
//import Hola from "./components/Hola";

const LISTA_CURSOS = [
  {id:1, curso: 'Aprendiendo Laravel'},
  {id:2, curso: 'Curso de Docker para principiantes'},
  {id:3, curso: 'Construyendo REST API desde cero'},
  {id:4, curso: 'Curso de POO'},
];


function App() {
  const [cursos, setCursos] = useState(LISTA_CURSOS);

  const eliminarCursos=(id)=> {
    //console.log ("desde app - eliminado curso de id: ", id);
    const nuevosCursos = cursos.filter( item => {
      return item.id!==id;
    });
    //console.log(nuevosCursos);
    setCursos(nuevosCursos);
  }

  return (
    <div>
      <h1>Hola mundo REACT</h1> 
{/*       <Hola mensaje="Este es un mensaje" pie="La fecha es 2022-feb-07"/>
      <Hola mensaje="Esmeraldas" pie="Es una ciudad hermosa"/>
      <Hola mensaje="Ecuador" pie="País Multicultural"/> */}
      
      {/* <Contador/> */}

      <Cursos cursos={cursos} onEliminarCursos={eliminarCursos} />

    </div>
  );
}

export default App;
