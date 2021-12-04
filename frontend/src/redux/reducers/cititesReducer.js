const citiesReducer = (state = { listCities: [],auxiliar: []}, action) => {
    // de acuerdo a la action que reciva va a modificar el store
    // de alguna manera

    switch (action.type) {
        case 'GET_ALL_CITIES':

            return {
                ...state,
                listCities: action.payload
            }
        case 'FILTER_CITIES':
                let resultadosBusqueda = state.listCities.filter((elemento) => {
                    if (elemento.title.toString().toLowerCase().includes(action.payload.trim().toLowerCase())
                        || elemento.country.toString().toLowerCase().includes(action.payload.trim().toLowerCase())) {
                        return elemento;
                    }
                });
                
                return{
                    ...state,
                    auxiliar:resultadosBusqueda
                }
                
        default:
            return state
    }


}

export default citiesReducer