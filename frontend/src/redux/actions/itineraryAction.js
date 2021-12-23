import axios from 'axios'
const itineraryAction = {
    getAItinerary: (id)=>{

        return async(dispatch) => {
            let respuesta  = await axios.get(`http://localhost:4000/api/itinerary/galery/${id}`)
            let info = respuesta.data.response
            dispatch({type:'GET_A_ITINERARY',payload:info})
        }   

    },
    
   
    obtenerActividades: () => {
        return async (dispatch) => {
      
            const response = await axios.get(`http://localhost:4000/api/activities`)
            // console.log(response.data.response)
            dispatch({ type: 'GET_ALL_ACTIVIETIES', payload: response.data.response})
      
        }
    },
    likeItinerary: (id,idUser) =>{
        return async () => {
                try{
                    let response = await axios.put(`http://localhost:4000/api/itinerary/like/${id}`,{idUser})
                console.log(response.data.response)
                    return response.data.response
            
                }catch (error){
                    console.log(error)
                }
            
        }
    }
    
}

export default itineraryAction