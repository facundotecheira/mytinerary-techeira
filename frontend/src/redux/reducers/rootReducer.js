import { combineReducers } from "redux";
import citiesReducer from "./cititesReducer";
import itineraryReducer from "./itineraryReducer"
import countrysReducer from "./countrysReducer";
import  userReducer  from "./userReducer";

const rootReducer = combineReducers({
    galery : citiesReducer,
    itinerary: itineraryReducer,
    country:countrysReducer,
    user: userReducer
})

export default rootReducer