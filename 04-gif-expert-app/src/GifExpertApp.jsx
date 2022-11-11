import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GidGrid } from "./components/GidGrid";


export const GifExpertApp = () => {
                
        const [categories, setCategories] = useState(['Itachi']) 
    
        const onAddCategory = ( newCategory) =>{

            if ( categories.includes ( newCategory) ) return;  
        
            setCategories([newCategory, ...categories ]);
       }

  return (
    <>
    
    <h1>Search for gifs of your favorite characters</h1>

   
    <AddCategory 
        onNewCategory={onAddCategory}
    />  
    
    {
    categories.map( (category) => (
        <GidGrid 
        key={category}  
        category={category} />
        ))
                
    }
   
      

    </>
  )
}
