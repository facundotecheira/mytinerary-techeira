import { combineReducers } from "redux";
import citiesReducer from "./cititesReducer";
import itineraryReducer from "./itineraryReducer"

const rootReducer = combineReducers({
    galery : citiesReducer,
    itinerary: itineraryReducer
})

export default rootReducer