// cada componente puede tener su estado y sus hookcs

import { useState } from "react";
                          
export const AddCategory = ({onNewCategory}) => {

  
    const [inputValue, setinputValue] = useState('');

    const onInputChange = (event)=>{ 
        
        setinputValue(event.target.value); 
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        
        if (inputValue.trim().length <= 1) return; 

        setinputValue('');
        onNewCategory( inputValue.trim());
        
    }

  return (
    <form onSubmit={ (event)=> onSubmit(event)}>
        <input
            type="text"
            placeholder="Search"
            value={inputValue}   
            onChange={ (event) => onInputChange(event) } 
        />

    </form>
    

    
    
    
    
  )
}
