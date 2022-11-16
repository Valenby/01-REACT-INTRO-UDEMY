import { useState } from "react";
import { AddCategory, GidGrid } from "./components";

//COMPONENT PRINCIPAL
export const GifExpertApp = () => {
                
    const [ categories, setCategories ] = useState(['Rick and Morty'])

    const onAddCategory = ( newCategory) =>{

        if ( categories.includes ( newCategory ) ) return;  
    
        setCategories([ newCategory, ...categories ]);
    }

return (

  <>
  <h1>Gvon no tengo título jeje, parchese y busque lo que quiera </h1>  
  <h1>...(Nopor *NO* perras)...</h1>
  {/* input */}
  <AddCategory 
      onNewCategory={onAddCategory} //MANDAMOS REFERENCIA A LA FUNCION ONNEWCATEGORY
  />  
  {/* lista, map.. esto nos renderiza la busqueda del input */}
  {
  categories.map( ( category ) => (
      <GidGrid 
      key={category}  
      category={category} />
      ))
              
  }
  
    

  </>
)
}
