import axios from 'axios'
const comentaryAction = {
    
    agregarComentarios:(comentary, userId, itinerary)=>{
        return async (dispatch) => {
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
        return async (dispatch) => {
      
            const response = await axios.get(`http://localhost:4000/api/comentary`)
            // console.log(user.data.response)
            dispatch({ type: 'GET_COMENTARY', payload: response.data.response})
      
        }
    },
    editarComentario:(id,comentary)=>{
        return async (dispatch) => {
      
            const response = await axios.put(`http://localhost:4000/api/comentary/${id}`,{comentary})
            // console.log(user.data.response)
            // dispatch({ type: 'ADD_COMENTARY', payload: response.data.response.actualizado })
            // return {success:true, response: response.data.response.actualizado}
            return ({ response: response.data.response.actualizado, success: true })
      
        }
    }
    
}

export default comentaryAction