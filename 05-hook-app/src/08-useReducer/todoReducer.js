export const todoReducer = ( initialState =[], action )=>{

    //para regresar el estado:
    switch ( action.type ) {
        //definimos casosdeuso denuetsro reducer
        case '[TODO] add Todo':
            // throw new Error('Action.type = ABC no esta implementada');
        //aca regresamos ennuevo state:
            return [ ...initialState, action.payload ]
        default:
            return initialState;
    }
}