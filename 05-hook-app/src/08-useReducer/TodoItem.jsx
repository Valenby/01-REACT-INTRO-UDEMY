//COMPONENTE HIJO DETODOLIST
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span
         className={`aling-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }`}
         onClick={ () => onToggleTodo( todo.id ) }>
          { todo.description }
        </span>
         
         <button
            className="btn btn-danger"
            onClick={ () => onDeleteTodo( todo.id ) }
          >
            Borrar
          </button> 
    </li>
  )
}
//recivimos comoprops el onDeleteTodo
// luego lomandamos a llamar en el onclick 
// y el onDeleteTodo recive como parametro el (todo.id)