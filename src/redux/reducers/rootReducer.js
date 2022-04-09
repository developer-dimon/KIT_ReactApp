import {combineReducers} from "redux";
import {userReducer} from "./usersReducer";
import {appReducer} from "./appReducer";
import {friendsReducer} from './friendsReducer'

export const rootReducer = combineReducers({
    userReducer,
    appReducer,
    friendsReducer,
})