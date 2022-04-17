import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {appReducer} from "./appReducer";
import {friendsReducer} from './friendsReducer'

export const rootReducer = combineReducers({
    userReducer,
    appReducer,
    friendsReducer,
})