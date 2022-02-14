import React, {useState} from 'react';

const VALOR_INICIAL=0;

function Contador() {
    const [cont, setCont] = useState(VALOR_INICIAL);

    const incrementar=()=> {
        setCont(cont+1);
    }

    const decrementar=()=> {
        setCont(cont-1);
    }

    const reset=()=> {
        setCont(VALOR_INICIAL);
    }


    return (
        <div>
            <h1>Contador: {cont}</h1>
            <button className='btn btn-success' onClick={ incrementar }>Incrementar</button>
            <button className='btn btn-success' onClick={ decrementar }>Decrementar</button>
            <button className='btn btn-danger' onClick={ reset }>Reset</button>
        </div>
    );
}

export default Contador;