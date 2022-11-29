import { useTodo } from "../Hook";
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

export const TodoApp = () => {
  //useTodo:(COSTOMHOOK PROPIOPARA ACORTAR LOGICA)
  const {todo, todoCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo }=useTodo();
  
  return (
    <>
    
    <h1>TodoApp: {todoCount}, <small>pendientes: {pendingTodosCount}</small> </h1>
    <hr />
     
      <div className="row">

        {/* ELIMINAMOS TODO */}
        <div className="col-7">
            <TodoList todo={ todo }
              onDeleteTodo={ handleDeleteTodo}
              onToggleTodo={ handleToggleTodo}
            />
        </div>

        {/* EMITIMOSNUEVO TODO */}
        <div className="col-5"> 
            <h4>Agregar Todo</h4>
            <hr />
            <TodoAdd 
            onNewTodo={ handleNewTodo }  
            />
        </div>

      </div>

    </>
  )
}
