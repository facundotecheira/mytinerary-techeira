import { combineReducers } from "redux";
import citiesReducer from "./cititesReducer";
import itineraryReducer from "./itineraryReducer"
import countrysReducer from "./countrysReducer";

const rootReducer = combineReducers({
    galery : citiesReducer,
    itinerary: itineraryReducer,
    country:countrysReducer
})

export default rootReducer