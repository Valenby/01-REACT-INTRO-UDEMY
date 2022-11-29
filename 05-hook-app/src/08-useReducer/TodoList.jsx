//COMPONENTE PADRE DE TODOITEM
import { TodoItem } from "./TodoItem"

                                    //Llamamaos la emision del onDeleteTodo
export const TodoList = ( { todo = [], onDeleteTodo, onToggleTodo }) => {
    
  return (
        <ul className="list-group">
            {
                todo.map( todo =>(
                    <TodoItem 
                    key={ todo.id}
                    todo={ todo }
                    onDeleteTodo={ onDeleteTodo } 
                    onToggleTodo={ onToggleTodo}
                    />
                ))
            }
        </ul>
  )
}
