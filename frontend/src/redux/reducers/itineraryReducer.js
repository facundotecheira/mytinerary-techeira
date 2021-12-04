const itineraryReducer = (state = { listItinerary: [] }, action) => {
    // de acuerdo a la action que reciva va a modificar el store
    // de alguna manera

    switch (action.type) {
        case 'GET_A_ITINERARY':
            
         return{

            ...state,
            listItinerary: action.payload
         }  
    
        default:
            return state
    }
}


export default itineraryReducer