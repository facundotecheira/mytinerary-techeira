const countrysReducer = (state = {countries:[]},action)=> {

    switch (action.type) {
        case 'GET_ALL_COUNTRIES':
            
            return{
                ...state,
                countries: action.payload
            }
            
    
        default:
            return state
    }

}

export default countrysReducer