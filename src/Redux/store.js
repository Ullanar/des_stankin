import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import mainReducer from "./mainReducer";
import marksReducer from "./marksReduser";

let reducers = combineReducers({
    profile: profileReducer,
    main: mainReducer,
    marks: marksReducer
})

let store = createStore(reducers)
export default store
