export const todoReducer = ( initialState =[], action )=>{

    //para regresar el estado:
    switch ( action.type ) {
        //definimos casosdeuso denuetsro reducer
        case '[TODO] add Todo':
            // throw new Error('Action.type = ABC no esta implementada');
        //aca regresamos ennuevo state:
            return [ ...initialState, action.payload ]

        case '[TODO] remove Todo':
            return initialState.filter( todo => todo.id !== action.payload )

        case '[TODO] toggle Todo':
            return initialState.map( todo =>{

                if ( todo.id === action.payload){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
                
                return todo;
            });

        default:
            return initialState;
    }
}