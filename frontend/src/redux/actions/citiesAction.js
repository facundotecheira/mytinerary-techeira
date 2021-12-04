import axios from 'axios'
const citiesAction = {
    getCities: ()=>{

        return async(dispatch, getState) => {
            let respuesta  = await axios.get('http://localhost:4000/api/galery')
            let info = respuesta.data.response
            dispatch({type:'GET_ALL_CITIES',payload:info})
        }   

    },

    filtercities:(algo) =>{
        return (dispatch,getState)=>{
            dispatch({type:'FILTER_CITIES',payload:algo})
        }
    }
}

export default citiesAction