import { useMemo, useState } from 'react';
import { useCounter } from '../hook';

//funcion que nos retorna un ciclo.
const interaccionUsuario = ( interaccionDelNumero = 100 ) => {
    for( let i = 0; i < interaccionDelNumero; i++ ) {
        console.log('Ahí vamos...');
    }

    return `${ interaccionDelNumero } iteraciones realizadas`;
}


//componente memohook
export const MemoHook = () => {

    const { counter, increment } = useCounter( 4000 );
    const [ show, setShow ] = useState(true);

    const memorizaValor = useMemo( () => interaccionUsuario(counter), [counter])

    return (
        <>
            <h1>Counter: <small>{ counter }</small>  </h1>
            <hr />

            <h4>{ memorizaValor }</h4>


            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow( !show )  }
            >
                Show/Hide { JSON.stringify(show) } 
            </button>
        
        </>
    )
}