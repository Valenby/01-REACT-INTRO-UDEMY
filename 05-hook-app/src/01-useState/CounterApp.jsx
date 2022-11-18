import { useState } from "react";

//componente 
export const CounterApp = () => {

    //estado que tiene un objeto
    const [state, setCounter] = useState({
        //3propiedades
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })
  
    const {counter1, counter2, counter3} = state;

    return (
    <>

    <h1>Counter: { counter1 } </h1>
    <h1>Counter: { counter2 } </h1>
    <h1>Counter: { counter3 } </h1>

    <hr />

    <button className="btn"
     onClick={
         ()=> setCounter({
            ...state, //destructuramos el state(cogemos todas las props)
            counter1: counter1 + 1,

            })  
         }>+1</button>
    
   



    </>
  )
}
