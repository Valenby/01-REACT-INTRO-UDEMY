import { useState } from 'react';
import { useCounter } from '../hook'
import { Small } from './Small';

export const Memorize = () => {
     // argumentos que nos interezan:
    const { counter, increment } = useCounter( 10 );
    const [ show, setShow ] = useState(true)

    return (
        <>
            <h1>Counter: <Small value={ counter } />  </h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ () => increment() } //llamamos el argumento
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow( !show )  } // !valor opuesto que tenga el show
            >
                Show/Hide { JSON.stringify(show) } 
            </button>
        
        </>
    )
}
