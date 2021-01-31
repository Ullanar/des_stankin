import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import mainReducer from "./mainReducer";

let reducers = combineReducers({
    profile: profileReducer,
    main: mainReducer,
})

let store = createStore(reducers)
export default store
