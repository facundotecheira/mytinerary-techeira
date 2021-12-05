import axios from 'axios'
const itineraryAction = {
    getAItinerary: (id)=>{

        return async(dispatch, getState) => {
            let respuesta  = await axios.get(`http://localhost:4000/api/itinerary/galery/${id}`)
            let info = respuesta.data.response
            dispatch({type:'GET_A_ITINERARY',payload:info})
        }   

    },


}

export default itineraryAction