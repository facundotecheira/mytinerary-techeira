import axios from 'axios'
const comentaryAction = {
    
    agregarComentarios:(comentary, userId, itinerary)=>{
        return async (dispatch, getState) => {
                    try{
                        let response = await axios.post(`http://localhost:4000/api/comentary`, {comentary, userId, itinerary} )
                        // console.log(response.data.response.nuevoComentario)
                        dispatch({ type: 'ADD_COMENTARY', payload: response.data.response.nuevoComentario })
                        // return response.data.response._doc.comentary
                    }catch (error){
                       console.log(error)
                    }
        }
    },

    obtenerComentarios: (id) => {
        return async (dispatch, getState) => {
      
            const user = await axios.get(`http://localhost:4000/api/comentary`)
            // console.log(user.data.response)
            dispatch({ type: 'GET_COMENTARY', payload: user.data.response})
      
        }
    }
    
}

export default comentaryAction