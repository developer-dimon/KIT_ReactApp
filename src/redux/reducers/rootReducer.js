import {combineReducers} from "redux";
import {randomUserReducer} from "./randomUserReducer";
import {appReducer} from "./appReducer";
import {friendsReducer} from './friendsReducer'
import userReducer from "../slices/userSlice"

export const rootReducer = combineReducers({
    randomUserReducer,
    appReducer,
    friendsReducer,
    userReducer,
})