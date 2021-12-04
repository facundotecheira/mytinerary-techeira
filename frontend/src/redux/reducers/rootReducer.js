import { combineReducers } from "redux";
import citiesReducer from "./cititesReducer";

const rootReducer = combineReducers({
    galery : citiesReducer
})

export default rootReducer