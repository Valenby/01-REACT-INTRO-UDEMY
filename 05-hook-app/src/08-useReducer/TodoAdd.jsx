import { useForm } from "../Hook/useForm"; 



export const TodoAdd = ({onNewTodo}) => {

// MANEJO DE FORMULARIO CON USETATE
//  reutilizamos el hook que ya teniamos para el manejo de formulario
  const {description, onInputChange,onResetForm,} = useForm({
    description: ''
  })

//recibir un evento
  const onFormSubmit = (event) =>{
    event.preventDefault();

    if( description.length <= 1) return;

    const newTodo ={
      id: new Date().getTime(),   
      description,
      done: false,
    }
    onNewTodo(newTodo);
    onResetForm();
  }
  
 

  return (
    
    <form>
       <input onSubmit={onFormSubmit} 
          type="text"
          placeholder="..."
          className="form-control"
          name="description"
          value={ description }
          onChange={onInputChange}
      />
      <button 
          type="submit" 
          className="btn btn-outline-primary mt-2" 
      >
          Agregar
      </button>
    </form>
    
    
    
    
  )
}
