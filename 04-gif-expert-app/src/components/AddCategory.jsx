// cada componente puede tener su estado y sus hookcs

import { useState } from "react";
                            //se mandanda a llamar las props del padre
export const AddCategory = ({onNewCategory}) => {

    // tenemos que manejar el estado(valores de los usuarios)
    const [inputValue, setinputValue] = useState('');

    const onInputChange = (event)=>{ //en la funcion podemos recibir el evento
        //console.log(event.target.value); 
        setinputValue(event.target.value); //linea para tener el valor en el imput
    }

    const onSubmit = (event)=>{
        event.preventDefault();//no tener refleshh del navegador
        //console.log(inputValue); //para actualizar info y mandar 
        if (inputValue.trim().length <= 1) return; //para salir de la funcion
        //se reciven las props
        // setCategories( categories => [inputValue,...categories]);  
        // limpiar inputvalue
        setinputValue('');
        onNewCategory( inputValue.trim());
        
    }

  return (
    <form onSubmit={ (event)=> onSubmit(event)}>
        <input
            type="text"
            placeholder="Buscar GIFS"
            value={inputValue}   
            onChange={ (event) => onInputChange(event) } //capturamos el valor
        />

    </form>
    

    
    
    
    
  )
}
