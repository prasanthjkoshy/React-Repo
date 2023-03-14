import { combineReducers } from "redux";
import {prodReducer}  from "./productReducer";

const reducers = combineReducers({
    allproducts: prodReducer,
});

export default reducers;