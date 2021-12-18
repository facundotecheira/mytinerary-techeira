import { combineReducers } from "redux";
import citiesReducer from "./cititesReducer";
import itineraryReducer from "./itineraryReducer"
import countrysReducer from "./countrysReducer";
import  userReducer  from "./userReducer";
import comentaryReducer from "./comentaryReducer"
const rootReducer = combineReducers({
    galery : citiesReducer,
    itinerary: itineraryReducer,
    country:countrysReducer,
    user: userReducer,
    comentary: comentaryReducer
})

export default rootReducer