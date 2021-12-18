const comentaryReducer = (state = { listComentary: [] }, action) => {
    // de acuerdo a la action que reciva va a modificar el store
    // de alguna manera

    switch (action.type) {
        case 'GET_COMENTARY':
            
         return{

            ...state,
            listComentary: action.payload
            
         }  
    
        default:
            return state
    }
}


export default comentaryReducer 