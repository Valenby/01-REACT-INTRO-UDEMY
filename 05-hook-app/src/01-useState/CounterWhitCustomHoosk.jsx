import { useCounter } from "../Hook/useCounter"

//componenete
export const CounterWhitCustomHoosk = () => {

    //creamos nuestro propio CostomHook y destructuamos las props de useCounter
    const {counter, increment, decrement, reset} = useCounter();

    return (
      <>
      <h1>counter con hook: {counter} </h1>
      <hr />
      {/* incrementamos de 2 en dos.. */}
      <button onClick={ ()=> increment(2) } className="btn btn-primary" >+1</button>
      <button onClick={ reset }     className="btn btn-primary" >reset</button>
      <button onClick={ ()=> decrement(2) } className="btn btn-primary" >-1</button>
      </>
  )
}
