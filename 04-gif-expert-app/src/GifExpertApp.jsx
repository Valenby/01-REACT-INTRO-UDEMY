import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GidGrid } from "./components/GidGrid";


export const GifExpertApp = () => {
                
        const [categories, setCategories] = useState([ 'Naruto']) 
    
        const onAddCategory = ( newCategory) =>{

            if ( categories.includes ( newCategory) ) return;  
        
            setCategories([newCategory, ...categories ]);
       }

  return (
    <>
    
    <h1>Gif Expert App</h1>

   
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
