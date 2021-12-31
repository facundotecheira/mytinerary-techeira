import axios from 'axios'
const countrysAction = {
    getCountries: ()=>{

        return async(dispatch, getState) => {
            let respuesta  = await axios.get('https://mytinerary-techeira.herokuapp.com/api/v0.1/countries')
            let info = respuesta.data.data
            dispatch({type:'GET_ALL_COUNTRIES',payload:info})
        }   

    }
}

export default countrysAction

