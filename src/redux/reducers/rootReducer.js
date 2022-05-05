import {combineReducers} from "redux";
import {randomUserReducer} from "./randomUserReducer";
import {appReducer} from "./appReducer";
import {friendsReducer} from './friendsReducer'
import authReducer from "./authReducer";


export const rootReducer = combineReducers({
    randomUserReducer,
    appReducer,
    friendsReducer,
    authReducer,
})