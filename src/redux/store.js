import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { reducer } from "./reducer";


export const myStore = createStore(reducer, applyMiddleware(logger,thunk));
