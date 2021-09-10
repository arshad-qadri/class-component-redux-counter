import { combineReducers } from "redux";
import counter from "./counter";
import apiCall from "./apiCall";

const rootReducer = combineReducers({ counter, apiCall });

export default rootReducer;
