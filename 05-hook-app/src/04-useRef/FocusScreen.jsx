import { useRef } from "react";


export const FocusScreen = () => {
  
    const inputRef = useRef(); //nos permite tener una referencia, no vuelve a renderizar nuestro componente.
    

    const onclick = ()=>{
    // asi buscamos referencia de input  para ponerle el focus
        // document.querySelector('input').select();
        // console.log(inputRef);
        inputRef.current.select();
    }
  
  
  
    return (
    <>
    
    <h1>FocusScreen</h1>
    <hr />

    <input type="text"
    ref={inputRef}
     placeholder="Ingrese su nombre"
     className="form-control"
    />

    <button className="btn btn-primary mt-2"
            onClick={ onclick}
    >
        Set Focus
    </button>


    </>
  )
}
