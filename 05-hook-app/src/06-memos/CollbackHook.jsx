import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CollbackHook = () => {

    const [counter, setCounter] = useState(10);
    
    const incrementPadre = useCallback(
      () => {
        setCounter( (value) => value +1);
      },
      [],
    )
    
    

    return (
        <>
        
        <h1> useCallback hook: { counter } </h1>
        <hr />
        
         <ShowIncrement   increment={incrementPadre} />  {/* mandamos el valor a la propety */}
        
        
        </>
  )
}
