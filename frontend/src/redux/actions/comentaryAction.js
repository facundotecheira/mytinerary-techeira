import axios from 'axios'
const comentaryAction = {
    
    agregarComentarios:(comentary,comentaryPhoto, userId, itinerary,token)=>{
        return async (dispatch) => {
                    try{
                        let response = await axios.post(`https://mytinerary-techeira.herokuapp.com/api/comentary`, {comentary,comentaryPhoto, userId, itinerary} )
                        // console.log(response.data.response.nuevoComentario)
                        dispatch({ type: 'ADD_COMENTARY', payload: response.data.response.nuevoComentario })
                        // return response.data.response._doc.comentary
                    }catch (error){
                       console.log(error)
                    }
        }
    },

    obtenerComentarios: (id) => {
        return async (dispatch) => {
      
            const response = await axios.get(`https://mytinerary-techeira.herokuapp.com/api/comentary`)

            dispatch({ type: 'GET_COMENTARY', payload: response.data.response})
      
        }
    },
    editarComentario:(id,comentary)=>{
        return async (dispatch) => {
      
            const response = await axios.put(`https://mytinerary-techeira.herokuapp.com/api/comentary/${id}`,{comentary})
            return ({ response: response.data.response.actualizado, success: true })
      
        }
    },
    
    eliminarComentario:(id)=>{
        return async (dispatch) => {
      
            const response = await axios.delete(`https://mytinerary-techeira.herokuapp.com/api/comentary/${id}`)
            return ({ response: response.data.response.comentary, success: true })
      
        }
    }
    
}

export default comentaryAction