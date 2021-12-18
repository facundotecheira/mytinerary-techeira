import axios from 'axios'
const comentaryAction = {
    
    obtenerComentarios: (id) => {
        return async (dispatch, getState) => {
      
            const user = await axios.get(`http://localhost:4000/api/comentary/${id}`)
            console.log(user.data.response)
            dispatch({ type: 'GET_COMENTARY', payload: user.data.response})
      
        }
    }
    
}

export default comentaryAction