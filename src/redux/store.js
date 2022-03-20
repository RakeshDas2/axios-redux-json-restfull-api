import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import allDataReducer from './reducer/allDataReducer'


export const store = createStore(allDataReducer, applyMiddleware(thunk))