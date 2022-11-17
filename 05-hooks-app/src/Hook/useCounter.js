//creamos nuestro segundo hook. USE= para saber que es unhook
import { useState } from "react"

//component(funcion)
export const useCounter = (initialValue=10) => {

    const [counter, setCounter] = useState(initialValue)
    //cambiamos el estado de counter con el set..
    const increment = (value =1)=>{
      setCounter( counter + value );
    }
    const decrement = (value =1)=>{
      if(counter === 0) return;  //retorna solo hasta el 0.. 
      setCounter( counter - value );
    }
    const reset = ()=>{
       setCounter( initialValue );
    } //para incrementar valores de 2 en 2, o en 10 etc
      //utilizamos argumentos (value =1) set(counter + value)
  return { //lo podemos destructurar en otra parte  ya que lo estamos llamando  como objeto
    counter,
    increment,
    decrement,
    reset,
  } 
}
