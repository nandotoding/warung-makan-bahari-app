import {combineReducers} from "redux";
import menuReducer from "./reducers/menuReducer";

const rootReducer = combineReducers({
    menus: menuReducer
});

export default rootReducer;