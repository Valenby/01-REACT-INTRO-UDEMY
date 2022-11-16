//creamos nuestro segundo hook. USE= para saber que es unhook

import { useState } from "react"


//component(funcion)
export const useCounter = (initialValue=10) => {

    const [counter, setCounter] = useState(initialValue)


  return (
    <div>useCounter</div>
  )
}
