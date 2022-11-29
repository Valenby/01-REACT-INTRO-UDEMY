import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";



const initialState = [
    // {
    //     id: new Date().getTime(),    
    //     description: 'Lavar ropa uwu',
    //     done: false,
    // }, 
]

//Guardamos DATOS EN LOCALSTORAGE:
const init =()=>{
    return JSON.parse(localStorage.getItem('todo')) || [];
}




export const useTodo = () => {
                                                                  // Tercera funcion
  const [todo, dispatch] = useReducer( todoReducer, initialState, init ) 
  

  //Nuevo estado o efecto cuando todos cambian
  useEffect(() => {
    //leery serializar TODOS
    localStorage.setItem('todo', JSON.stringify(todo) );
  }, [todo])

  
  //AGREGAR TODOS
  const handleNewTodo = (todo) =>{
    //console.log({ todo })  //payload que enviamos al todo
        const action = {
          type: '[TODO] add Todo', //accion que mandamos al reducer
          payload: todo
        }
        console.log(todo, dispatch);
    //paramandar la accion:
     dispatch(action);
  } 

  //BORRAR TODOS
  const handleDeleteTodo = ( id )=>{
    dispatch({
      type: '[TODO] remove Todo',
      payload: id
    });
  }

  //MARCAR COMOCOMPLETADO O PENDIENTE
  const handleToggleTodo = ( id )=>{
    dispatch({
      type: '[TODO] toggle Todo',
      payload: id,
    });
  }

  return {
    todo,

    todoCount: todo.length,
    pendingTodosCount: todo.filter( todo => !todo.done ).length,

    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,

  }
}
