import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./todoReducer"

const initialState = [
    {
        id: new Date().getTime(),    
        description: 'Lavar ropa uwu',
        done: false,
    },
    {
      id: new Date().getTime() *3 ,    
      description: 'Ropa lavada uwu',
      done: false,
    },
]


export const TodoApp = () => {
      
  const [todo, dispatch] = useReducer( todoReducer, initialState ) 

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

    
   

    
  return (
    <>
    
    <h1>TodoApp: 10, <small>pendientes: 2</small> </h1>
    <hr />

      <div className="row">
        <div className="col-7">
         <TodoList todo={ todo }  />
        </div>


        <div className="col-5"> 
            <h4>Agregar Todo</h4>
            <hr />
           <TodoAdd onNewTodo={ todo => handleNewTodo(todo) }  />
        </div>

      </div>


    
    
    
    </>
  )
}
