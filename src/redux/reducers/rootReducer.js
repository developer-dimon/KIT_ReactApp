import {combineReducers} from "redux";
import {randomUserReducer} from "./randomUserReducer";
import {appReducer} from "./appReducer";
import {friendsReducer} from './friendsReducer'

export const rootReducer = combineReducers({
    randomUserReducer,
    appReducer,
    friendsReducer,
})