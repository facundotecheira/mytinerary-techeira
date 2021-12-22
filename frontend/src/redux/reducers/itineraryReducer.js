const itineraryReducer = (state = { listItinerary: [], listActivities: [] }, action) => {
    // de acuerdo a la action que reciva va a modificar el store
    // de alguna manera

    switch (action.type) {
        case 'GET_A_ITINERARY':
            
         return{

            ...state,
            listItinerary: action.payload
         } 
         
         
         case 'GET_ALL_ACTIVIETIES':
            
            return{
   
               ...state,
               listActivities: action.payload
            } 
    
        default:
            return state
    }
}


export default itineraryReducer