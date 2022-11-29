
// lista de tareas por hacer
const initialState = ()=>[{
    id: 1,
    todo: 'Hoock reducer',
    done: false,
}




];

// reducer function pura
const todoReducer = ( state = initialState, action = {} ) =>{

    //regresamos un nuevo estado
    if (action.type === '[TODO] add todo' ){
        return [...state, action.payload];
    }

  
    return state; //redresamos nuevo estado
}









let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Enviamnos al state',
    done: false,
}

//acciones
const addTodoAction = {
    type: '[TODO] add todo', //accion
    payload: newTodo,        //lo que ejecuta la accion
}

//para sacar estado acual
todos = todoReducer(todos, addTodoAction );


console.log({state: todos});