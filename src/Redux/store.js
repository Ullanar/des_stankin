import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import mainReducer from "./mainReducer";
import coursesReducer from "./coursesReducer";

let reducers = combineReducers({
    profile: profileReducer,
    main: mainReducer,
    courses: coursesReducer
})

let store = createStore(reducers)
export default store
